import '../styles/globals.css'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { LocaleContext } from "../components/NavBar.js"
import { useState } from 'react';
import AppContext from '../AppContext';
import { getCookie, setCookie } from 'cookies-next';
let mounted = false;

function MyApp({ Component, pageProps }) {
  const [languageSelected, setLanguageSelected] = useState('en')
  // console.log(1,pageProps)
 if (!getCookie('langs'))setCookie('langs','en')
  return <>
    <div className='flex flex-col min-h-screen'>
      <AppContext.Provider value={
        {
          state : {
            languageSelected
          },
          setLanguageSelected: setLanguageSelected
        }
      }>

        <NavBar  />
        <Component {...pageProps} />
        <Footer />
      </AppContext.Provider>
    </div>
  </>


}



export default MyApp
