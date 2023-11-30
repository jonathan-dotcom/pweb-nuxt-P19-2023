import payload from 'payload';

/** @type {import('payload/types').CollectionConfig} */
const Media = {
  slug: 'Media',
  admin: {
    useAsTitle: 'alt'
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
              action: "Media Uploaded",
            },
          });
        } else if (args.operation === "deleteByID") {
          await payload.create({
            collection: "Logs",
            data: {
              name: args.result.name,
              log: args.result.id,
              timestamp: new Date(),
              action: "Media Deleted",
            },
          });
        } else if (args.operation === "updateByID") {
          await payload.create({
            collection: "Logs",
            data: {
              name: args.result.name,
              log: args.result.id,
              timestamp: new Date(),
              action: "Media Updated",
            },
          });
        }
      },
    ],
  },

  fields: [
    {
      name: 'url',
      type: 'text',
      label: 'Link to your media',
    },
    {
      name: 'alt',
      type: 'text',
    },
  ],
}

export default Media;