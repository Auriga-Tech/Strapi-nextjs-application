import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import React, { useContext, useEffect, useState } from 'react'
import { fetchAPI, getStrapiURL } from '../../lib/api'
import Link from 'next/link'
import AppContext from '../../AppContext'
import { getCookie } from 'cookies-next';


  const Blog = ( {slug} ) => {
    const value  = useContext(AppContext)
    let lang = value.state.languageSelected;
  
  const [blog, setBlog] = useState()
  useEffect(() => {
    

    const fetchData = async () =>{
      

      const response = await fetchAPI('/blogs',{
        filters: [
          {
            'slug' : slug
          }
        ],
        populate : '*' ,
        locale : lang   
      },{
        headers: {
          'Authorization' : 'Bearer '+getCookie('jwt')
        }
      })
      console.log("Localization: ",response)
      setBlog(response.data[0])
    }
    try{
      fetchData()
     
      
    }catch(err){
      console.group(err)
    }
  },[lang])
  
   const url = getStrapiURL()
 

  if (blog){
    return (
    
      <div className="container w-full  mx-auto">
  
      <div className="container md:px-6  leading-normal" >
  
  
        <div className="font-sans">
          <p className="text-base md:text-sm text-green-500 font-bold">&lt; <Link href="/blogs" className="text-base md:text-sm text-green-500 font-bold no-underline hover:underline">BACK TO BLOG</Link></p>
          <h1 className="font-bold font-sans break-normal text-gray-900 pt-6 pb-2 text-3xl md:text-4xl">{blog.attributes.title}</h1>
          <div className='flex items-center flex-wrap '>
          <h2 className="text-sm md:text-base  flex font-normal ">{blog.attributes.publish_at}</h2>
          <h2 className="tracking-widest text-xs title-font bg-slate-100  p-2 rounded-3xl ml-10 font-medium text-black ">{blog.attributes.category.data.attributes.name}</h2>
  
          </div>
                   
                     
        </div>
  
  
        <div className="font-sans flex flex-wrap mt-10">
          <img
            src={`${blog.attributes.image.data.attributes.formats.large.url}`}
            className="w-2/3 h-auto shadow-lg"
            alt=""
          />
        </div>
  
  
  
         <div className='mt-6 w-2/3 text-lg '  >
         {/* <ReactMarkdown children = {blog.attributes.content}/>    */}
         </div>
        
  
  
  
  
  
  
  
  
       
  
  
  
  
      </div>
    </div>
    
    )
  }
  
}
export async function getServerSideProps(context) {
  console.log("Chl gya",context)
  
  // const response = await fetchAPI(`/blogs/${context.query.id}`, {
  //   populate: '*'
  // });

  return {
    props: { slug : context.query.slug }
  }
}
export default Blog