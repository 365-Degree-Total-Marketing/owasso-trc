export default {
  name: 'sales',
  type: 'document',
  title: 'Event Sales',
  fields: [
    {
      name: 'event_year',
      type: 'reference',
      to: [
        {
          type: 'campaignInfo',
        },
      ],
    },
    {
      name: 'sponsor',
      type: 'reference',
      to: [
        {
          type: 'sponsors',
        },
      ],
    },
    {
      name: 'event',
      type: 'reference',
      to: [
        {
          type: 'events',
        },
      ],
    },
    {
      name: 'sponsorship_level',
      type: 'reference',
      to: [
        {
          type: 'levels',
        },
      ],
    },
    {
      name: 'volunteer',
      type: 'reference',
      to: [
        {
          type: 'volunteers',
        },
      ],
    },
    {
      name: 'approved',
      type: 'boolean',
      title: 'This Sale is Approved',
    },
    {
      name: 'notes',
      type: 'richText',
      title: 'Notes',
    },
  ],
}
