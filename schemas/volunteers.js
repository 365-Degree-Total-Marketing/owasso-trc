import images from './images'

export default {
  name: 'volunteers',
  type: 'document',
  title: 'Volunteers',
  fields: [
    {
      name: 'fname',
      type: 'string',
      title: 'First Name',
    },
    {
      name: 'lname',
      type: 'string',
      title: 'Last Name',
    },
    {
      name: 'street',
      type: 'string',
      title: 'Address',
    },
    {
      name: 'city',
      type: 'string',
      title: 'City',
    },
    {
      name: 'state',
      type: 'string',
      title: 'State',
    },
    {
      name: 'zip',
      type: 'string',
      title: 'Zip Code',
    },
    {
      name: 'phone',
      type: 'string',
      title: 'Phone Number',
    },
    {
      name: 'email',
      type: 'string',
      title: 'Email Address',
    },
    {
      name: 'pass',
      type: 'string',
      title: 'Password',
    },
    {
      name: 'images',
      type: 'images',
      title: 'Image of Volunteer',
    },
  ],
}
