import React, { useEffect, useState } from 'react'
import { fetchAPI } from '../lib/api';

const parseJSON = resp => (resp.json ? resp.json() : resp);
const checkStatus = resp => {
  if (resp.status >= 200 && resp.status < 300) {
    return resp;
  }
  return parseJSON(resp).then(resp => {
    throw resp;
  });
};
const headers = {
  'Content-Type': 'application/json',
};

const Contact = (props) => {
  console.log(props, "Contact Page")
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',

  })

  const [submitted, setSubmitted] = useState(false)




  const handleChange = ({ target: { name, value } }) => {
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }


  const handleSubmit = async e => {
    console.log("Inside onSubmit.....")
    e.preventDefault();
    try {
      const res = await fetchAPI("/messages", {}, {
        method: 'POST',
        headers,
        body: JSON.stringify({ "data": formData }),
      })

      setSubmitted(true)


    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className='md:container md:mx-auto px-4'>


      <div className="max-w-screen-lg md:mx-auto ">
        <p className='text-2xl ml-3 pt-5 font-normal'>OUR LOCATIONS</p>
        <div className="grid grid-flow-row px-6 sm:px-0 md:grid-flow-col grid-rows-1 md:grid-rows-1 sm:grid-cols-1 md:grid-rows-2 gap-4 py-6 sm:py-12">
          
          {props.data.data.attributes.blocks.map((location, key) => {
            return (
              <div className="grid grid-cols-1 gap-4 mx-auto col-span-2 w-full px-4 py-7" key={location.id}>
                <p className='text-3xl'>{location.city}</p>
                <div className=" bg-gray-300 rounded-lg min-h-[400px]">
                  <iframe width="100%" height="100%" frameBorder="0" title="map" marginHeight="0" marginWidth="0" scrolling="no" src={location.url} ></iframe>
                </div>
                <div className="px-5  bg-white relative flex flex-wrap rounded shadow-md">
                  <div className="w-2/3 ">
                    <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-9">ADDRESS</h2>
                    <p className="mt-1">{location.complete_Address}</p>
                    <p className="mt-2">{location.contact_no}</p>
                  </div>

                </div>

              </div>
            )
          })}
          
          {/* <!-- How can I make this col sticky? --> */}
          <div className="grid-flow-row lg:h-64 row-end-1 col-span-2 order-first md:order-last md:sticky top-[85px]">
            <div className="overflow-y-hidden bg-gradient-to-r from-red-100  px-6 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
              {(submitted == false) ? (
                <form onSubmit={handleSubmit}>
                  <h2 className="text-gray-900 text-3xl mb-8 pt-6 font-bold title-font">Get In Touch</h2>
                  
                  <div className="relative mb-4">
                    <label className="leading-7 font-bold text-sm text-gray-600">Name</label>
                    <input type="text" id="name" name="name" value={formData.name} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={handleChange} />
                  </div>
                  <div className="relative mb-4">
                    <label className="leading-7 font-bold  text-sm text-gray-600">Email</label>
                    <input type="email" id="email" name="email" value={formData.email} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={handleChange} />
                  </div>
                  <div className="relative mb-4">
                    <label className="leading-7 font-bold  text-sm text-gray-600">Message</label>
                    <textarea id="message" name="message" value={formData.message} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" onChange={handleChange}></textarea>
                  </div>
                  <button type='submit' className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit</button>                  
                </form>
              ) : (
                <div className="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3" role="alert">
                  <p className="font-bold">Thank You For Choosing STITCH</p>
                  <p className="text-sm">We will get notified you shortly.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps() {

  const response = await fetchAPI('/contact-us', {
    populate: '*'
  })

  return ({
    props: { data: response }
  })

}

export default Contact