import React from 'react'

const Blogs = (props) => {

    return (
        <div>


            <section className="text-gray-600 body-font">
                <div className="h-48 justify-center flex flex-col text-center font-bold  bg-red-50 mb-20">
                    <h1 className="font-medium title-font text-5xl text-gray-900">{props.data.data.attributes.heading}</h1>
                </div>
                <div className="container  mx-auto">
                    <div className=''>
                        <div className="flex p-6 flex-wrap -m-4">
                            {props.data.data.attributes.blog.map((blog) => {
                                return (
                                    <div className="p-4 md:w-1/3" key={blog.title}>
                                        <div className="h-full border-none border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                            <div className='bg-slate-100 '>
                                                <img className="rounded-lg ... lg:h-48 md:h-36 mx-auto object-cover  object-center" src="https://www.stitchmes.com/wp-content/uploads/2022/02/Suuply-chain-chargebacks.jpg" alt="blog" />

                                            </div>
                                            <div className="p-6">

                                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{blog.title}</h1>
                                                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{blog.category}</h2>
                                                <p className="leading-relaxed mb-3">{blog.date}</p>
                                                <div className="flex items-center flex-wrap ">
                                                    <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More

                                                    </a>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}


                        </div>
                    </div>

                   

                    <div className="p-6 mt-20 w-full">
                        <div className="font-poppins ... rounded-2xl mx-auto h-full bg-indigo-600 text-white p-16 ">
                            <h1 className='text-5xl ' >{props.data.data.attributes.trial.title}</h1>
                            <p className="leading-relaxed mb-6 text-2xl w-1/2 mt-6">{props.data.data.attributes.trial.description}</p>
                            <div>
                                <button className=" font-extrabold border-0 py-2 px-8 focus:outline-none bg-slate-100 rounded text-lg text-indigo-600 mt-5">Get Started</button>

                            </div>
                        </div>
                    </div>

                </div>

            </section>

        </div>
    )
}


export default Blogs