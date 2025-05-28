// Querying with "sanityFetch" will keep content automatically updated
// Before using it, import and render "<SanityLive />" in your layout, see
// https://github.com/sanity-io/next-sanity#live-content-api for more information.
import { defineLive } from "next-sanity";
import { client } from './client'

const token = process.env.SANITY_API_READ_TOKEN;
if(!token) {
  throw new Error("Missing SANITY_API_READ_TOKEN")
  // console.warn('No token found. Live content will not be available.');
  // console.warn('Please set the SANITY_API_READ_TOKEN environment variable.');
  // console.warn('See https://www.sanity.io/docs/api-keys for more information.');
  // console.warn('You can also set the SANITY_API_READ_TOKEN environment variable in your .env file.');
  
}

export const { sanityFetch, SanityLive } = defineLive({ 
  // client: client.withConfig({ 
  //   // Live content is currently only available on the experimental API
  //   // https://www.sanity.io/docs/api-versioning
  //   // apiVersion: 'vX' 
    
  // }) 
  client,
    serverToken: token,
    browserToken: token,
    fetchOptions: {
      revalidate: 0, // Revalidate every 60 seconds
    }
});
