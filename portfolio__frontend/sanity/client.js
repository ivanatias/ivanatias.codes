import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = sanityClient({
  projectId: 'uaj0umn5',
  dataset: 'production',
  apiVersion: '2022-11-09',
  useCdn: true
})

const builder = imageUrlBuilder(client)

export const urlFor = (source) => {
  return builder.image(source)
}
