import { MdImage } from 'react-icons/md'

export default {
  title: 'Image',
  name: 'articleImage',
  type: 'object',
  icon: MdImage,
  fields: [
    {
      title: 'Image',
      name: 'image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      title: 'Alternative Text',
      name: 'altText',
      type: 'string'
    },
    {
      title: 'Caption Text',
      name: 'caption',
      type: 'string'
    }
  ]
}
