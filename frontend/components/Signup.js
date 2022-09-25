import Link from 'next/link';
import React, { useState } from 'react'
import { fetchAPI, getStrapiURL } from '../lib/api'

const headers = {
  'Content-Type': 'application/json',
};
const Signup = () => {
  const url = getStrapiURL()
  const [alert, setAlert] = useState()
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = ({ target: { name, value } }) => {
    setUser(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async e => {
    console.log("inside onsubmit!!")
    e.preventDefault();
    try {
      const res = await fetchAPI("/auth/local/register", {}, {
        method: 'POST',
        headers,
        body: JSON.stringify( user),
      })

      setAlert('success', 'Successfully registered')

    } catch (err) {
      console.log(err)
      setAlert['alert', 'Something went wrong']
    }
  }
  return (
    <div className="flex items-center min-h-screen bg-gray-50">
      <div className="flex-1 h-full max-w-4xl mx-auto bg-white rounded-lg shadow-xl">
        <div className="flex md:flex-row">

          <div className="w-full  items-center justify-center ">
            <form onSubmit={handleSubmit}>
            <div className="mx-auto p-14">
              <div className="flex justify-center">

              </div>
              <h1 className="mb-4 text-2xl font-bold text-center text-gray-700">
                Sign up
              </h1>
              <hr />
              {alert && (
                <div style={{ backgroundColor: alert[0] === "success" ? "lightgreen" : "lightcoral" }}>
                  <div dangerouslySetInnerHTML={{ __html: alert[1] }} />
                </div>
              )}
              <br />

              <div>
                <label className="block text-sm">
                  Name
                </label>
                <input type="text" name="username" value={user.username}
                  className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                  placeholder="Name" onChange={handleChange} />
              </div>
              <div className="mt-4">
                <label className="block text-sm">
                  Email
                </label>
                <input type="email" name="email" value={user.email}
                  className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                  placeholder="Email Address" onChange={handleChange} />
              </div>
              <div>
                <label className="block mt-4 text-sm">
                  Password
                </label>
                <input name="password" value={user.password}
                  className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                  placeholder="Password" type="password" onChange={handleChange} />
              </div>
              <button type='submit'
                className="block  px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg active:bg-blue-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
                 onSubmit={handleSubmit}>
                Sign up
              </button>


              <div className="mt-4 text-center">
                <p className="text-sm">Already have an account? <p className="text-blue-600 hover:underline"><Link href="/Signin"
                  >Sign In</Link></p> </p>
              </div>
            </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup