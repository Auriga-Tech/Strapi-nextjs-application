import React from 'react'
import Image from 'next/image'
import { getStrapiURL } from '../lib/api'
import Link from 'next/link'

const BlogPage = ({ blogPage ,blogs}) => {
  
  const url = getStrapiURL()
  
  return (
    
    <section className="text-gray-600 body-font">
      <h1 className="bg-red-50 p-10  text-7xl font-medium title-font text-center text-gray-900 mb-20">
        {blogPage.header.title}
      </h1>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {blogs.data.map((blog) => {
               console.log("BLLLL",blog)
              return (
               
                <div className="p-3 md:w-1/3" key ={blog.attributes.slug}>
                 <Link href={{
                  pathname: `/blogs/${blog.attributes.slug}`
                  }}>
                 <div className="h-full border-none  rounded-sm overflow-hidden">
                    <div className='bg-slate-100 border-none rounded-lg p-4'>
                    <img className="lg:h-48 md:h-36 w-2/3 mx-auto  object-cover object-center" src ={`${blog.attributes.image.data.attributes.formats.small.url}`}  alt="blog" />
                    
                      </div>
                    <div className="mt-5">
                       <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{blog.attributes.title}</h1>
                       <div className="flex items-center flex-wrap ">
                       
                      </div>
                    </div>
                  </div>
                 </Link> 
                </div>
              )
            })}

          </div>
        </div>
      </section>

      <section className="text-white  mb-2 body-font">
            <div className="bg-indigo-600 rounded-3xl container  px-11 py-24 mx-auto">
              <div className="flex flex-col p-3 w-full mb-12" >
                <h1 className="lg:w-2/3 text-6xl font-medium title-font mb-4 ">{blogPage.cta_block.data.attributes.cta.title}</h1>
                <p className="lg:w-2/3  text-3xl leading-relaxed ">{blogPage.cta_block.data.attributes.cta.text}</p>
              </div>
              {blogPage.cta_block.data.attributes.cta.buttons.map((button) => {
               
                return (
                  
                  <div className="flex lg:w-2/3 w-full sm:flex-row flex-col  px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end" key ={button.link.label}>

                    <button className="text-indigo-500 font-bold bg-white border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">{button.link.label}</button>
                  </div>
                )
              })}
            </div>
          </section>

    
    



    </section >
  )
}

export default BlogPage