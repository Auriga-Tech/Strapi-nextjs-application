import Head from 'next/head'
import Image from 'next/image'
import NavBar from '../components/NavBar'
import styles from '../styles/Home.module.css'
import MainWrapper from '../components/MainWrapper'
import QueryString from 'qs'
import { fetchAPI } from '../lib/api'
import Cta from '../components/Cta'
import Feature from '../components/Feature'
import blogs from './blogs'
import Hero from '../components/Hero'
import Testimonials from '../components/Testimonials'
import { useEffect, useState } from 'react'
import { getCookie } from 'cookies-next'
import Card from '../components/Card'

export default function Home() {
  const [homePage, setHomePage] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchAPI('/pages', {
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
              media: {
                populate: '*'
              }
            }
          },
          cta_block: {
            populate: {
              cta: {
                populate: {
                  buttons: {
                    populate: ['link']
                  }
                }
              }
            }
          },

        },
        locale: getCookie('langs')
      });
      const productsResponse = await fetchAPI('/products');
      setProducts(productsResponse.data);
      if (response) {
        setHomePage(response.data)
      }
    }

    try {
      fetchData()
    } catch (err) {
      console.log(err)
    }


  }, [getCookie('langs')])


  return (
    <div>
      {homePage.length > 0 && homePage.map((page, index) => {
        if (page.attributes.slug == 'home')
          return (
            <div className=''>
              {console.log(page.attributes.blocks.filter((block) => block.__component == 'blocks.hero')[0])}
              <Hero key={index} {...page.attributes.blocks.filter((block) => block.__component == 'blocks.hero')[0]} />







              <Feature  {...page.attributes.blocks.filter((block) => block.__component == 'blocks.features')[0]} />








              <div>

              </div>
              <div classNameName='container mx-auto px-4'>
                <section className="text-gray-600 bg-gray-100 mb-6 body-font">
                  <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap w-full mb-20">
                      <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Our Products</h1>
                        <div className="h-1 w-20 bg-indigo-500 rounded"></div>
                      </div>
                      <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Everything you need to run a World className Digital Smart Factory</p>
                    </div>

                    <div className="flex flex-row justify-center items-center m-4 ">

                      {products.length > 0 ? <Card products={products} /> : "You don't have any Products"}

                    </div>

                  </div>
                </section>
                <Cta {...page.attributes.cta_block.data.attributes.cta} />
              </div>
            </div>
          )
      })}


    </div>


  )
}



