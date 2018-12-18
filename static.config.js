import axios from 'axios'

export default {
//   siteRoot: 'http://localhost:3001',
  plugins: ['react-static-plugin-styled-components'],
  getSiteData: () => ({
    title: 'React Static',
  }),
  getRoutes: async () => {
    const { data: posts } = await axios.get('https://betabackend.senti.cloud/rest/cms/pages/da/138230100010010')
    return [
      {
        path: '/blog',
        getData: () => ({
          posts,
        }),
        children: posts.map(post => ({
          path: `/post/${post.id}`,
          component: 'src/containers/Post',
          getData: () => ({
            post,
          }),
        })),
      },
    ]
  },
}
