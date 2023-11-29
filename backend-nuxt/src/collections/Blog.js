import payload from 'payload';

/** @type {import('payload/types').CollectionConfig} */
const Blog = {
  slug: 'Blog',
  admin: {
    useAsTitle: 'name'
  },
  access: {
    read: () => true,
    update: () => true,
    delete: () => true,
    create: () => true,
  },

  fields: [
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
      name: 'name',
      label: 'Title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      label: 'Content',
      type: 'textarea',
      required: true,
    },
    {
      name: 'Media',
      type: 'relationship',
      required: false,
      relationTo: 'Media',
    },
  ],
};

export default Blog;
