import qs from "qs";

/**
 * Get full Strapi URL from path
 * @param {string} path Path of the URL
 * @returns {string} Full Strapi URL
 */
export function getStrapiURL(path = "") {
  return `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL 
  }${path}`;
}

/**
 * Helper to make GET requests to Strapi API endpoints
 * @param {string} path Path of the API route
 * @param {Object} urlParamsObject URL params object, will be stringified
 * @param {Object} options Options passed to fetch
 * @returns Parsed API call response
 */
export async function fetchAPI(path, urlParamsObject = {}, options = {}) {
  // Merge default and user options
  const mergedOptions = {
    headers: {
      "Content-Type": "application/json",
      
    },

    ...options,
  };
   console.log(mergedOptions)
  // Build request URL
  const queryString = qs.stringify(urlParamsObject);
  const requestUrl = `${getStrapiURL(
    `/api${path}${queryString ? `?${queryString}` : ""}`
  )}`;

  // Trigger API call
  let response;
  try{
     await fetch(requestUrl, mergedOptions)
     .then(response => response.json())
     .then(data => response = data);
   //  console.log("API-----------------------------",response)
  }
  catch(err ){
    console.log(err)
  }

//   // Handle response
//   try{
//     if (!response.ok) {
//       console.error(response.statusText);
//       throw new Error(`An error occured please try again`);
//     }
//   }
//   catch(err){
//     console.log(err)
//   }
//   let data;
//  try{
//   data = await response.json()
//  }catch(err){
//   console.log(err)
//  }
//    ;
//   return data;
return response;
}