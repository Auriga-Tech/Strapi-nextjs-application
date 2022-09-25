import React, { useContext, useEffect, useState } from 'react'
import BlogPage from '../components/BlogPage'
import QueryString from 'qs'
import { fetchAPI } from '../lib/api'
import { getCookie } from 'cookies-next'
import AppContext from '../AppContext'
import Router from 'next/router'
import Link from 'next/link'


const Blogs = () => {
  const [blogPage, setBlogPage] = useState()
  const [blogs, setBlogs] = useState()
  const value = useContext(AppContext)
  let lang = value.state.languageSelected;

  useEffect(() => {

    const fetchData = async () => {
      console.log("Hello", getCookie('jwt'))
      const blogPageResponse = await fetchAPI('/blog-page', {
        populate: {
          header: {
            populate: ['*']
          },
          blocks: {
            populate: {
              buttons: {
                populate: ['link']
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
          }


        },
        locale: lang
      }, {
        headers: {
          'Authorization': 'Bearer ' + getCookie('jwt')
        }
      }

      );
      const blogsResponse = await fetchAPI('/blogs', {
        populate: {
          image: {
            populate: ['*']
          },
          category: {
            populate: ['*']
          }
        },
        locale: lang
      },
        {
          headers: {
            'Authorization': 'Bearer ' + getCookie('jwt')
          }
        });
      console.log("BlogsResponse: ", blogsResponse)
      if (blogPageResponse.data)
        setBlogPage(blogPageResponse.data.attributes)
      if (blogsResponse.data)
        setBlogs(blogsResponse)
    }

    try {
      fetchData()
    } catch (err) {
      console.log("Blogs err: ", err)
    }
  }, [lang])
  if (blogPage && blogs)
    return (
      <div>
        <BlogPage blogPage={blogPage} blogs={blogs} />
      </div>
    )
  else if (getCookie('jwt') == null) {

    return (
      <div className='container mx-auto'>
        <div className="flex flex-col space-y-4 min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-gray-900">
          <div className="flex flex-col p-8 bg-white shadow-md hover:shodow-lg rounded-2xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg"
                  className="w-16 h-16 rounded-2xl p-3 border border-blue-100 text-blue-400 bg-blue-50" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <div className="flex flex-col ml-3">
                  <div className="font-medium leading-none">Please Signin/Signup first .</div>
                  <p className="text-sm text-gray-600 leading-none mt-1">Click here for Sign Up
                  </p>
                </div>
              </div>
              <button className="flex-no-shrink bg-red-500 px-5 ml-4 py-2 text-sm shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-red-500 text-white rounded-full">
                <Link href='/Signup'>Sign up</Link>
              </button>
            </div>
          </div>

        </div>

      </div>
    )
  }
}


// export async function getServerSideProps() {

//   const blogPageResponse = await fetchAPI('/blog-page',{
//     populate: {
//       header: {
//         populate: ['*']
//       },
//       blocks: {
//          populate : {
//           buttons : {
//                 populate :['link']
//           }
//          }

//         },
//         cta_block: {
//           populate: {
//             cta: {
//               populate: {
//                 buttons: {
//                   populate: ['link']
//                 }
//               }
//             }
//           }
//         }


//     }
//   });
// const blogsResponse = await fetchAPI('/blogs',{
//  populate :{
//   image : {
//     populate : ['*']
//  },
//  category : {
//   populate : ['*']
//  }
// }});

//  console.log("BlogPageRespnse: ",blogPageResponse)
//  console.log("BlogsResponse: ",blogsResponse);


//   return {
//     props: { blogPageResponse,
//       blogsResponse }
//   }
// }

export default Blogs