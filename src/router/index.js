import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/all',
    name: 'All',
    component: () => import(/* webpackChunkName: "about" */ '../views/All.vue'),
    children: [
      {
        path: ':id',
        props: true,
        component: () => import(/* webpackChunkName: "about" */ '../components/SelectedLetter.vue')
      }
    ]
  },
  {
    path: '/categorie/:idCate',
    name: 'Categorie',
    props: true,
    component: () => import(/* webpackChunkName: "about" */ '../views/Categorie.vue')
  },
  {
    path: '/categories',
    name: 'Categories',
    component: () => import(/* webpackChunkName: "about" */ '../views/Categories.vue')
  },
  {
    path: '/zone/:idZone',
    name: 'Zone',
    props: true,
    component: () => import(/* webpackChunkName: "about" */ '../views/Zone.vue')
  },
  {
    path: '/zones',
    name: 'Zones',
    component: () => import(/* webpackChunkName: "about" */ '../views/Zones.vue')
  },
  {
    path: '/ingredient/:idIngredient',
    name: 'Ingredient',
    props: true,
    component: () => import(/* webpackChunkName: "about" */ '../views/Ingredient.vue')
  },
  {
    path: '/recherche',
    name: 'Recherche',
    component: () => import(/* webpackChunkName: "about" */ '../views/Recherche.vue')
  },
  {
    path: '/recette/:idRecette',
    name: 'Recette',
    props: true,
    component: () => import(/* webpackChunkName: "about" */ '../views/Recette.vue')
  },
  {
    path: '/:catchAll(.*)*',
    alias: '/404',
    name: 'NotFound',
    component: () => import(/* webpackChunkName: "404" */ '../views/NotFound.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
