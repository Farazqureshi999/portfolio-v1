export default {
    name: 'portfolio',
    type: 'document',
    title: 'Portfolio Projects',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Project Name'
      },
      {
        name: 'detail',
        type: 'string',
        title: 'Project Description'
      },
      {
        name: 'projectImg',
        type: 'image',
        title: 'Project Image'
      },
      {
        name: 'websiteUrl',
        type: 'url',
        title: 'Website URL'
      },
      {
        name: 'githubUrl',
        type: 'url',
        title: 'Website Github URL'
      }
     
    ]
  }