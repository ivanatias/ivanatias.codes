export default {
  title: 'Custom Image',
  name: 'customImage',
  type: 'object',
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
    }
  ]
}
