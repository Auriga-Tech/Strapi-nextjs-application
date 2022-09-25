import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { fetchAPI } from '../lib/api'
import Card from '../components/Card'
import Loader from '../components/Loader'

const Products = (props) => {
  console.log("Welcome to Products: ", props)

  const [productPage, setProductPage] = useState()
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const productsResponse = await fetchAPI('/products');
      const productsPageResponse = await fetchAPI('/product-page');
      setProducts(productsResponse.data)
      setProductPage(productsPageResponse.data.attributes)
    }
    fetchData();
  }, [])
  return (
    <div classNameName='container mx-auto px-4'>
      <section className="text-gray-600 bg-gray-100 mb-6 py-4 body-font">
        <div className="flex flex-col justify-center items-center m-4 ">
          <div className='card-container flex '>
            {products.length >0 ?
              <Card productPage={productPage} products={products} /> : (
               <Loader />
              )
            }
          </div>
        </div>
      </section>
    </div>
  )
}

// export async function getServerSideProps(){

//   const response = await fetchAPI('/product-page',{
//     populate:{

//     }
//   });
//   return {
//     props: {data : response.data}
//   }
// }



export default Products