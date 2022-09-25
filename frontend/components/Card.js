import Link from 'next/link';
import React from 'react'

const Card = ({ productPage, products }) => {
  return (
    <div className='card-container   w-fit'>
    <div className='grid grid-cols-2 gap-5 '>
      {products.map((product) => {
        return <>
        
          <Link href={{
            pathname: `/products/${product.attributes.slug}`
          }}>
            <div className='flex-none bg-white overflow-hidden rounded-xl mb-4 cursor-pointer border-primary shadow-lg hover:shadow-xl'>
              <div className='px-5 pt-5 pb-2 md:px-6 md:pt-6 max-w-[350px] flex flex-col items-start justify-between order-2 lg:order-1 px-5 pt-10 pb-5'>
                
                <h5 className='text-xl font-semibold pb-6 pt-2'>{product.attributes.name}</h5>
                <p className='leading-6 pb-16'>{product.attributes.description}</p>
                <div className='text-[#5E63F1]'>
                  <Link href={{
                    pathname: `/products/${product.attributes.slug}`
                  }}>Know More</Link>
                </div>
              </div>
            </div>
          </Link>
         


        </>
      })
      }
      </div>
    </div>
  )
}

export default Card