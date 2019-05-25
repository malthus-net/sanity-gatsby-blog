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
                  buildHookId: '5ce9898fbc35c5bd10bd7e2a',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-so9ixvyr',
                  apiId: '409e7e04-4d9d-4536-81cb-5d7d9fd412fc'
                },
                {
                  buildHookId: '5ce9898f5ff1edf2e3194d69',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-tny9go6k',
                  apiId: 'c848c0c9-22c9-4d83-9561-34a7a76e6d28'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/malthus-net/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-tny9go6k.netlify.com', category: 'apps'}
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
