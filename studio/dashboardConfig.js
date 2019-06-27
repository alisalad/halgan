export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d14c8b1bde32b19f405d77c',
                  title: 'Sanity Studio',
                  name: 'halgan-studio',
                  apiId: 'd918e5ea-8866-4f69-bbeb-282e11b4954e'
                },
                {
                  buildHookId: '5d14c8b1aa27f27db3278378',
                  title: 'Blog Website',
                  name: 'halgan',
                  apiId: '4a14a6d2-24bf-4092-a906-581e8be1897a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/alisalad/halgan',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://halgan.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
