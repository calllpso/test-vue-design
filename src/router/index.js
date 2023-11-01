import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    { path: '/', name: 'home', component: () => import('../views/Home.vue') },
    { path: '/employees',  name: 'employees',    component: () => import('../views/Employees.vue'),
      children: [
        {
          path: 'create', name: 'employees-create', component: () => import('../views/EmployeesCreate.vue'),
        },
      ]
    },
    { path: '/lists',  name: 'lists',    component: () => import('../views/Lists.vue'),
      children: [
        {
          path: 'create', name: 'lists-create', component: () => import('../views/ListsCreate.vue'),
        },
      ]
    },
    { path: '/position',   name: 'position',     component: () => import('../views/Position.vue') },
    { path: '/division',   name: 'division',     component: () => import('../views/Division.vue') },
    { path: '/audio',      name: 'audio',        component: () => import('../views/Audio.vue'),
      children: [
        {
          path: 'create', name: 'audio-create', component: () => import('../views/AudioCreate.vue'),
        },
      ]
    },
    { path: '/reports',    name: 'reports',      component: () => import('../views/Reports.vue') },
  ]
})

export default router
