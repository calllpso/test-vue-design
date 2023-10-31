import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/', name: 'home', component: () => import('../views/Home.vue')
    },
    {
      path: '/local', name: 'local', component: () => import('../views/Local.vue')
    },
    {
      path: '/employees',  name: 'employees',    component: () => import('../views/Employees.vue'),
        children: [
          {
            path: 'create', name: 'create', component: () => import('../views/EmployeesCreate.vue'),
          },
        ]
    },
    {
      path: '/position',   name: 'position',     component: () => import('../views/Position.vue')
    },
    {
      path: '/division',   name: 'division',     component: () => import('../views/Division.vue')
    },
    {
      path: '/audio',      name: 'audio',        component: () => import('../views/Audio.vue')
    },
    {
      path: '/reports',    name: 'reports',      component: () => import('../views/Reports.vue')
    },
  ]
})

export default router
