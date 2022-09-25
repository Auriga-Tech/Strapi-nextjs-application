import React from 'react'

const Cta = (props) => {
    return (
        <div><section className="text-white  mb-2 body-font" style ={{padding: '0% 11% 0% 11%'}}>
            <div className="bg-gradient-to-bl from-blue-700 via-blue-700 to-blue-700 rounded-3xl container  px-11 py-24 mx-auto">
                <div className="flex flex-col p-3 w-full mb-12" >
                    <h1 className="lg:w-2/3 text-5xl font-medium title-font mb-7 ">{props.title}</h1>
                    <p className="lg:w-2/3  text-2xl leading-relaxed ">{props.text}</p>
                </div>
                {props.buttons.map((button) => {

                    return (

                        <div className="flex lg:w-2/3 w-full sm:flex-row flex-col  px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end" key={button.link.label} >

                            <button className="text-indigo-500 font-bold bg-white border-0 py-2 px-8 focus:outline-none  rounded text-lg">{button.link.label}</button>
                        </div>
                    )
                })}
            </div>
        </section></div>
    )
}

export default Cta