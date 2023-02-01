import { MdPerson } from 'react-icons/md'

export default {
  name: 'biography',
  title: 'Biography',
  type: 'document',
  icon: MdPerson,
  fields: [
    {
      name: 'year',
      title: 'year',
      type: 'string',
      validation: (...args) => console.log(args)
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string'
    }
  ]
}
