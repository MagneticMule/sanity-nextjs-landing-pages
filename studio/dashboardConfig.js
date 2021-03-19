export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '605519579d1382843d0c6362',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-jiywrrn8',
                  apiId: '54759a5e-b0ba-4d3e-9792-f916285a8b03'
                },
                {
                  buildHookId: '60551958bae52775539b4bb8',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-pc9goxm5',
                  apiId: 'e512556b-5c9a-44a0-91ce-5c52b202cec9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/MagneticMule/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-pc9goxm5.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
