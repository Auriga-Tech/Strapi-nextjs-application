import React from 'react'
import { getStrapiURL } from '../lib/api'

const Feature = (props) => {
    const url = getStrapiURL()
    console.log("PROPS",props)
    if (props != null)
    return (
        <section className={` text-gray-600 body-font ${props.theme == 'secondary' ? 'bg-gradient-to-r from-rose-100 to-teal-100' :''}  `}>
            <div className="container px-2 py-24 mx-auto">
            <h2 className="sm:text-3xl w-2/3 text-2xl font-medium title-font text-blue-900 mb-2">{props.header.title}
                </h2>
                <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-2">{props.header.label}
                </h1>
                


                <br />
                <br />
                <div className={`container  grid grid-cols-${props?.cardsPerRow} `}>
                {props?.cards.map((feature) => {
                    return (
                    
                    <div className="grid md:p-3 w-2/3 " key={feature.id}>
                        <div className="w-20 lg:pl-6 h-12 propss-center justify-center rounded-full  text-indigo-500 mb-4 flex-shrink-0">
                            <img src={feature.image.data?.attributes.url} alt={feature.image.data?.attributes.name} />
                        </div>
                        <div className="flex-grow lg:pl-6">
                            <h2 className="text-gray-900 border-l-2 border-[#5E63F1] pl-[10px] text-base title-font font-medium mb-2">{feature.title}</h2>
                            <p className="leading-relaxed text-[14px]">{feature.text}</p>

                        </div>
                    </div>
                
                )})}
                </div>
            </div>
        </section>

    )
}

export default Feature