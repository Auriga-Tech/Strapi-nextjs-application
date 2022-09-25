import React, { useContext, useEffect, useState } from 'react'
import Link from 'next/link'
import QueryString from 'qs'
import { fetchAPI } from '../lib/api'
import AppContext from '../AppContext'
import { useCookies } from 'react-cookie'
import { getCookie, setCookie } from 'cookies-next';
import { AiOutlineClose } from 'react-icons/ai'
import { GiHamburgerMenu } from 'react-icons/gi'





const NavBar = () => {
    const value = useContext(AppContext)
    let languageSelected = value.state.languageSelected
    const [navbar, setNavbar] = useState(false);
    const [showing, setShowing] = useState(false)
    const [item, setItem] = useState()
    const [locales, setLocales] = useState([])
    
   

    
   
    useEffect(() => {

        const fetchData = async () => {

            const response = await fetchAPI('/main', {
                populate: {
                    navigation: {
                        populate: ['links', 'rightButton', 'leftButton'],
                    },

                },
                locale: languageSelected
            });
            const ls = await fetchAPI('/i18n/locales')
            setLocales(ls)
            try {
                setItem(response.data)
            } catch (err) {
                console.error(err)
            }

        }


        try {
            fetchData();
        } catch (err) {
            console.error(err)
        }

    }, [languageSelected]);

   
    if (item) {

        return (


            
            <nav className="w-full  shadow">
                <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                    <div>
                        <div className="flex items-center justify-between py-3 md:py-5 md:block">
                            <a href={item.attributes.navigation.leftButton.href}>
                                <h2 className="text-3xl font-bold text-black">{item.attributes.navigation.leftButton.label}</h2>
                            </a>
                            <div className="md:hidden">
                                <button
                                    className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                    onClick={() => setNavbar(!navbar)}
                                >
                                    {navbar ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6 text-black"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6 text-black"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M4 6h16M4 12h16M4 18h16"
                                            />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div
                            className={`flex-1  justify-self-center pb-3 mt-8 md:flex md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                                }`}
                        >

                            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                                {item.attributes.navigation.links.map((link, idx) => {
                                    return (
                                        <li className="text-black hover:text-indigo-500 " key={idx}>
                                            <Link href={` ${link.href} `} key={idx}>
                                                <a className="mr-3   text-xm ">{link.label}
                                                </a>
                                            </Link>
                                        </li>
                                    )
                                })}

                            </ul>

                            <div className="mt-3 space-y-2 md:hidden  ">
                               
                                 <button className=" inline-block w-full text-center text-white bg-blue-700 hover:bg-blue-800 border-0 px-4 py-2 focus:outline-none rounded-md text-lg"><Link href={item.attributes.navigation.rightButton.href}>{item.attributes.navigation.rightButton.label}</Link></button>

                                <div className='grid grid-cols-1 '>
                                    <button onClick={() => setShowing(!showing)} id="dropdownDefault" data-dropdown-toggle="dropdown" className="inline-flex w-full px-4 py-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded  justify-center  items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">lang <svg className="ml-2 w-4 h-4 " aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg></button>
                                    <div className='relative w-full'>
                                        <div id="dropdown" className={`z-10 w-full text-center bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 ${showing ? 'absolute' : 'hidden'}`}>
                                            <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">

                                                {locales.map((l) => {

                                                    return (<li key={l.code}>
                                                        <a onClick={() => { setShowing(!showing); value.setLanguageSelected(l.code) }} href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" key={l.code}>{l.code}</a>
                                                    </li>)
                                                })}


                                            </ul>
                                        </div>
                                    </div>
                                </div>

                               
                            </div>
                        </div>
                    </div>
                  
                    <div className="hidden space-x-2 md:hidden lg:inline-flex">
                        
                    <button className=" px-4 py-2 text-white bg-blue-700 hover:bg-blue-800 border-0 focus:outline-none rounded text-lg"><Link href={item.attributes.navigation.rightButton.href}>{item.attributes.navigation.rightButton.label}</Link></button>
                    <div className='grid grid-cols-1'>
                                    <button onClick={() => setShowing(!showing)} id="dropdownDefault" data-dropdown-toggle="dropdown" className="inline-flex w-full px-4 py-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded  text-center  items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">lang <svg className="ml-2 w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg></button>
                                    <div className='relative'>
                                        <div id="dropdown" className={`z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 ${showing ? 'absolute' : 'hidden'}`}>
                                            <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">

                                                {locales.map((l) => {

                                                    return (<li key={l.code}>
                                                        <a onClick={() => { setShowing(!showing); value.setLanguageSelected(l.code) }} href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" key={l.code}>{l.code}</a>
                                                    </li>)
                                                })}


                                            </ul>
                                        </div>
                                    </div>
                                </div>
                       
                    </div>
                </div>
            </nav>
        )
    }

}



export default NavBar