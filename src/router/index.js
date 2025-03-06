import { createRouter, createWebHistory } from 'vue-router';
import Profile from '../components/Profile.vue';
import Skills from '../components/Skills.vue';



const routes = [
  {
    path: '/',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/skills',
    name: 'Skills',
    component: Skills
  }
];

const router = createRouter({
  history: createWebHistory('/'),
  routes
});

export default router;