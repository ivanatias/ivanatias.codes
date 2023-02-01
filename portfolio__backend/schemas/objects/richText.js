export default {
  title: 'Rich Text',
  name: 'richText',
  type: 'array',
  of: [
    {
      type: 'block',
      title: 'Block',
      styles: [
        { title: 'H3', value: 'h3' },
        { title: 'H4', value: 'h4' },
        { title: 'Normal', value: 'normal' },
        { title: 'Block quote', value: 'blockquote' }
      ],

      lists: [
        { title: 'Bullet List', value: 'bullet' },
        { title: 'Numbered List', value: 'number' }
      ],

      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
          { title: 'Inline Code', value: 'code' }
        ],
        annotations: [
          {
            title: 'URL',
            name: 'link',
            type: 'object',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url'
              },
              {
                title: 'Is External Link?',
                name: 'isExternal',
                type: 'boolean',
                initialValue: false,
                description:
                  'This field should be true if the link points to an external URL.'
              }
            ]
          }
        ]
      }
    },
    {
      type: 'articleImage'
    },
    {
      type: 'customCode'
    }
  ]
}
