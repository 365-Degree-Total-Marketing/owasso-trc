export default {
  name: 'join',
  type: 'document',
  title: 'Event Membership',
  fields: [
    {
      name: 'compName',
      type: 'string',
      title: 'Company Name',
    },
    {
      name: 'joined',
      type: 'boolean',
      title: 'Has Joined',
    },
    {
      name: 'value',
      type: 'number',
      title: 'Value of New Join',
      validation: (Rule) => Rule.positive(),
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
  ],
}
