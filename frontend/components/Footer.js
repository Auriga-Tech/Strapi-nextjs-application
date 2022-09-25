import QueryString from 'qs'
import React, { useEffect, useState } from 'react'
import { fetchAPI } from '../lib/api'

const Footer = ({ m_mounted }) => {

    const [footer, setFooter] = useState()
    useEffect(() => {
        const fetchData = async () => {
            const response  = await fetchAPI('/main', {
                populate: {
                    footer: {
                        populate: ['socialNetworks']
                    }
                }
            });
            
            console.log("Footer response",response)
            try{
                setFooter(response.data)
            }catch(err){
                console.error("Footer error",err)
            }
           
        }

        if (!m_mounted) {
            console.log("apicall");
            try{
                fetchData();
            }catch(err){
                console.error(err)
            }
        }


    }, []);

    if (footer) {



        return (
            <div className='
       mt-auto'>
                <div className="bg-gray-100">
                    <div className="container px-5 py-6 mx-auto flex footers-center sm:flex-row flex-col">
                        <a className="flex title-font font-medium footers-center md:justify-start justify-center text-gray-900">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLineCap="round" strokeLineJoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                            </svg>
                            <span className="ml-3 text-xl">STITCH</span>
                        </a>
                        <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">© 2022 STITCH —
                            <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">@knyttneve</a>
                        </p>
                        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                            <a href={footer.attributes.footer.socialNetworks[1].url} className="ml-3 text-gray-500">
                                <svg fill="currentColor" stroke="currentColor" strokeLineCap="round" strokeLineJoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                                </svg>
                            </a>

                            <a href={footer.attributes.footer.socialNetworks[1].url} className="ml-3 text-gray-500">
                                <svg fill="none" stroke="currentColor" strokeLineCap="round" strokeLineJoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                </svg>
                            </a>
                            <a href={footer.attributes.footer.socialNetworks[2].url} className="ml-3 text-gray-500">
                                <svg fill="currentColor" strokeLineCap="round" strokeLineJoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                </svg>
                            </a>
                            <a href={footer.attributes.footer.socialNetworks[3].url} className="text-gray-500">
                                <svg fill="currentColor" strokeLineCap="round" strokeLineJoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                </svg>
                            </a>


                        </span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer