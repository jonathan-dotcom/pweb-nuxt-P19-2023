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

  hooks: {
    afterOperation: [
      async (args) => {
        console.dir(args.operation);
        if (args.operation === "create") {
          await payload.create({
            collection: "Logs",
            data: {
              name: args.result.name,
              log: args.result.id,
              timestamp: new Date(),
              action: "Blog Created",
            },
          });
        } else if (args.operation === "deleteByID") {
          await payload.create({
            collection: "Logs",
            data: {
              name: args.result.name,
              log: args.result.id,
              timestamp: new Date(),
              action: "Blog Deleted",
            },
          });
        } else if (args.operation === "updateByID") {
          await payload.create({
            collection: "Logs",
            data: {
              name: args.result.name,
              log: args.result.id,
              timestamp: new Date(),
              action: "Blog Updated",
            },
          });
        }
      },
    ],
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
