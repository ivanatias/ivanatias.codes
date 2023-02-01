import { MdNote } from 'react-icons/md'

export default {
  title: 'Blog',
  name: 'blog',
  type: 'document',
  icon: MdNote,
  fields: [
    {
      title: 'Article Title',
      name: 'articleTitle',
      type: 'string'
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'articleTitle'
      }
    },
    {
      title: 'Excerpt',
      name: 'excerpt',
      type: 'text'
    },
    {
      title: 'Publish Date',
      name: 'publishDate',
      type: 'datetime'
    },
    {
      title: 'Cover Image',
      name: 'coverImage',
      type: 'customImage'
    },
    {
      title: 'Article Body',
      name: 'articleBody',
      type: 'richText'
    },
    {
      title: 'Social Share Image',
      name: 'socialShareImage',
      type: 'image',
      options: {
        hotspot: true
      }
    }
  ],
  preview: {
    select: {
      title: 'articleTitle',
      image: 'socialShareImage',
      publishDate: 'publishDate'
    },
    prepare({ title, image, publishDate }) {
      return {
        title,
        media: image,
        subtitle: publishDate
      }
    }
  }
}
