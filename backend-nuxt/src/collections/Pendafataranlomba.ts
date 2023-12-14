import { CollectionConfig } from 'payload/types'

const Pendaftaran: CollectionConfig = {
  slug: 'pendaftaran',
  access: {
    read: () => true,
    update: () => true,
    delete: () => true,
    create: () => true,
  },
  fields: [
    {
      name : 'nama',
      type : 'text',
      label : 'Nama',
    },
    {
      name : 'email',
      type : 'email',
      label : 'Email',
      required : true,
      unique : true,
    },
    {
      name : 'Asal_Sekolah',
      type : 'text',
      label : 'Asal Sekolah',
    },
    {
      name : 'Status',
      type : 'radio',
      options : [
        {
          label : 'Waiting',
          value : 'Waiting',
        },
        {
          label : 'Rejected',
          value : 'Rejected',
        },
        {
          label : 'Accepted',
          value : 'Accepted',
        },
      ],
      defaultValue: 'Waiting'
    },
    {
      name : 'date',
      type : 'date'
    },
  ],
}

export default Pendaftaran