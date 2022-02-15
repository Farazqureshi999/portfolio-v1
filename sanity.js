// lib/sanity.js
import {
    createImageUrlBuilder,
    createCurrentUserHook,
    createClient
  } from 'next-sanity'


  export const config = {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    useCdn: process.env.NODE_ENV === 'production',
    token: process.env.SANITY_API_TOKEN
  }

  
// Set up the client for fetching data in the getProps page functions
  export const sanityClient = createClient(config)


  /**
 * Set up a helper function for generating Image URLs with only the asset reference data in your documents.
 * Read more: https://www.sanity.io/docs/image-url
 **/
export const urlFor = (source) => createImageUrlBuilder(config).image(source)



// Helper function for using the current logged in user account
export const useCurrentUser = createCurrentUserHook(config)