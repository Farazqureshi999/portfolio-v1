export default {
    name: 'contact',
    type: 'document',
    title: 'Contact Submission',
    readOnly: true,
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name'
      },
      {
        name: 'email',
        type: 'email',
        title: 'Email'
      },
      {
        name: 'created_at',
        type: 'datetime',
        title: 'Created at'
      },
      {
        name: 'message',
        type: 'text',
        title: 'Message'
      },
     
    ]
  }