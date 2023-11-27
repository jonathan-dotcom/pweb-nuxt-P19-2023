// src/collections/blog.js

/** @type {import('payload/types').CollectionConfig} */
const Blog = {
    slug : "blog",
    fields : [
      {
        name: "title",
        type: "text",
        required: true,
      },
    ]
  }
  
  export default Blog