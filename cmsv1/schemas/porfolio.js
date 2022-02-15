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
      },
      {
        title:'Project Stack',
        type:'object',
        name:'stack',
        fields:[
          {
            name:'stack1',
            type:'string',
            title:'Tech Stack 1'
          },
          {
            name:'stack2',
            type:'string',
            title:'Tech Stack 2'
          },
          {
            name:'stack3',
            type:'string',
            title:'Tech Stack 3'
          }
        ]
      }
     
    ]
  }