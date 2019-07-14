import homePage from './pages/home'
import testPage from './pages/test'
import aboutPage from './pages/about'

const routes = [
  {
    path: '/',
    component: () => import('layouts/BaseLayout.vue'),
    children: [
      homePage,
      testPage,
      aboutPage
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
