import { createRouter, createWebHistory } from 'vue-router';
import SignUp from '@/components/SignUp.vue';
import SignIn from '@/components/SignIn.vue';
import Home from '@/views/HomeView.vue';
import WorkoutPage from "@/page/WorkoutPage.vue";
import WorkoutDetails from "@/components/WorkoutDetails.vue";
import NutritionPage from '@/page/NutritionPage.vue';
import HealthWellnessPage from '@/page/HealthWellnessPage.vue';
import ResourcesSection from '@/components/ResourcesSection.vue';
import Shoppingpage from '@/page/ShoppingPage.vue'


const routes = [
  {
    path: '/',name: 'Home',component: Home,
  },
  {
    path: '/signup',name: 'SignUp',component: SignUp,meta: { hideFooter: true },
  },
  {
    path: '/signin',name: 'SignIn',component: SignIn,
meta: { hideFooter: true },
  },
  { path: '/workout', name: 'Workout', component: () => import('@/views/WorkoutView.vue'), },
  { path: '/nutrition', name: 'Nutrition', component: () => import('@/views/NutritionView.vue'),},
  { path: '/health-wellness', name: 'HealthWell', component: () => import('@/views/HealthWellnessView.vue')},
  { path: '/shopping', name: 'Shopping', component: () => import('@/views/ShoppingView.vue') },
  {
    path: "/",
    name: "WorkoutPage",
    component: WorkoutPage,
  },
  {
    path: "/workouts/:category",
    name: "WorkoutDetails",
    component: WorkoutDetails,
    props: true,
  },
  {
    path: "/",
    name: "NutritionPage",
    component: NutritionPage,
  },
  {
    path: "/",
    name: "HealthWellnessPage",
    component: HealthWellnessPage,
  },
  {
    path: "/",
    name: "ResourcesSection",
    component: ResourcesSection,
  },
  {
    path: "/",
    name: "Shoppingpage",
    component: Shoppingpage,
  },

];


const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("authToken");

  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!token) {

      next('/login');
    } else {

      next();
    }
  } else {

    next();
  }
});

export default router;
