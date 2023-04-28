import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Inicio',
    redirect: 'Inicio',
    children: [
      {
        path: '/Inicio',
        name: 'Inicio',
        component: () =>
          import(/* webpackChunkName: "dashboard" */ '@/views/Inicio.vue'),

        params: true,
      },
      {
        path: '/AdminETramite',
        name: 'AdminETramite',
        component: () => import('@/views/AdminMunicipal/AdminETramite.vue'),
      },
      {
        path: '/VerificaTramite',
        name: 'VerificaTramite',
        component: () =>
          import('@/views/AdminMunicipal/AdminVerificaTramite.vue'),
      },
      {
        path: '/PasosTramite/:id',
        name: 'PasosTramite',
        component: () => import('@/views/AdminMunicipal/PasosTramite.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    // always scroll to top
    return { top: 0 }
  },
})

export default router
