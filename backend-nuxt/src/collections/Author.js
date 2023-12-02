// src/collections/Author.js

/** @type {import('payload/types').CollectionConfig} */
const Author = {
    slug : "author",
    admin : {
      useAsTitle : "nama"
    },
    access: {
      read: () => true,
      update: () => true,
      delete: () => true,
      create: () => true,
    },
  
    fields : [
      {
        name: "nama",
        type: "text",
        required: true,
      },
      {
        name: "email",
        type: "email",
        required: true,
        unique : true
      },
      {
        name: 'division',
        type: 'radio',
        options: [
            {
                label: 'Content Writer',
                value: 'content writer',
            },
            {
                label: 'Social Media',
                value: 'social media',
            },
        ],
        defaultValue: 'content writer',
      },
    ]
  }
  
  export default Author
  