import { getCookie } from 'cookies-next'
import React, { useEffect, useState } from 'react'
import Hero from '../../components/Hero';
import { fetchAPI } from '../../lib/api';
import Feature from '../../components/Feature'

const Product = ({ slug }) => {

  let lang = getCookie('langs')

  const [product, setProduct] = useState();

  useEffect(() => {
    const fetchData = async () => {

      const response = await fetchAPI('/products', {
        filters: [
          {
            'slug': slug
          }
        ],
        populate: {
          blocks: {
            populate: {
              header: {
                populate: '*'
              },
              cards: {
                populate: ['image']
              },
              button: {
                populate: ['*']
              },
              media: '*'
            }
          },
          header: {
            populate: '*'
          },
          seo: {
            populate: '*'
          },
          information: {
            populate: '*'
          }

        },
        locale: getCookie('langs')
      })
      console.log("Slug o Product: ", response)
      setProduct(response.data[0])
    }
    try {
      fetchData()

    } catch (err) {
      console.group(err)
    }
  }, [getCookie('langs')])

  if (product)
  return (
    <>
      <div className='max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto'>

        <Hero key={product?.id} {...product?.attributes.blocks.filter((block) => block.__component == 'blocks.hero')[0]} />

      </div>


      <div className='max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto'>
        <div>
          <h5 className='text-[#3123a8] mb-4 font-medium uppercase'>How it works</h5>
          <h3 className='text-4xl mb-10 font-medium'>Achieving deadlines has never been easier. Ensure availability
            & preparedness long before beginning the production cycle.</h3>
        </div>

        {product?.attributes.information.map((info, idx) => {
          return (
            (idx % 2 == 0) ? (
              <div className='grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16'>

                <div className='flex flex-col justify-center items-start row-start-2 sm:row-start-1'>
                  <h4 className='font-medium text-3xl leading-normal mb-6'>{info.title}</h4>
                  <p className='text-[#131a2d] leading-relaxed'>{info.content}</p>
                </div>
                <div className='flex w-full'>
                  <div className='h-full w-full'>
                    <div style={{ display: 'block', overflow: 'hidden', position: 'relative', boxSizing: 'border-box', margin: 0 }}>
                      <div style={{ display: 'block', boxSizing: 'border-box' }}>
                        <img className='hover:scale-105 duration-700 ease-in-out' src={info.image.data.attributes.url} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (<div className='grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16'>


              <div className='flex w-full'>
                <div className='h-full w-full'>
                  <div style={{ display: 'block', overflow: 'hidden', position: 'relative', boxSizing: 'border-box', margin: 0 }}>
                    <div style={{ display: 'block', boxSizing: 'border-box' }}>
                      <img className='hover:scale-105 duration-700 ease-in-out' src={info.image.data.attributes.url} />
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex flex-col justify-center items-start row-start-2 sm:row-start-1'>
                <h4 className='font-medium text-3xl leading-normal mb-6'>{info.title}</h4>
                <p className='text-[#131a2d] leading-relaxed'>{info.content}</p>
              </div>
            </div>)
          )
        })}

        
         

        


      </div>
      <Feature  {... product?.attributes.blocks.filter((block) => block.__component == 'blocks.features')[0]} />
    </>
  )
}

export async function getServerSideProps(context) {
  return {
    props: { slug: context.query.slug }
  }
}

export default Product