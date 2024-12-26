<template>
  <div class="container">

   <Navbar />


   <main>

     <router-view/>

   </main>


   <Footer v-if="!$route.meta.hideFooter" />
 </div>
</template>

<script>
import { reactive } from 'vue';
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

export default {
  name: "App",
  components: {
    Navbar,
    Footer
  },
  setup() {
    const cart = reactive([]); // Shared reactive cart

    return {
      cart, // Provide cart to all child components
    };
  },
  provide() {
    return {
      cart: this.cart,
      addToCart: (product) => this.cart.push(product),
      removeFromCart: (product) => {
        this.cart = this.cart.filter((item) => item.id !== product.id);
      },
    };
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.container {
  width: 100%;
  margin: 0 auto;
  font-family: 'Arial', sans-serif;
  color: #333;
}
</style>
