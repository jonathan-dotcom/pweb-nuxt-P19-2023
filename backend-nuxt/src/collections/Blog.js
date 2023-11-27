// src/collections/Blog.js

/** @type {import('payload/types').CollectionConfig} */
const Blog = {
    slug : "blog",
    fields : [
      {
        name: "title",
        type: "text",
        required: true,
      },
      {
        name: 'date',
        type: 'date',
        admin: {
          date: {
              pickerAppearance: 'dayOnly',
              displayFormat: 'd MMM yyy',
          },
        },
      },
      {
        name: 'author',
        type: 'relationship',
        relationTo: ['author'],
        filterOptions: ({ relationTo, siblingData }) => {
          return {
            division : { equals : 'content writer' }
          }
        }
      },
      {
        name: "content",
        type: "textarea",
        required: true,
      },
    ]
  }
  
  export default Blog
  