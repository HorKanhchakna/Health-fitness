<template>
  <div class="shopping-page">
    <h2>Shop Health Products</h2>

    <!-- Product List -->
    <div class="product-card-container">
      <div
        v-for="product in products"
        :key="product.id"
        class="product-card"
      >
        <img :src="product.image" :alt="product.name" />
        <h3>{{ product.name }}</h3>
        <p>{{ product.description }}</p>
        <button @click="addToCart(product)">Add to Cart</button>
      </div>
    </div>

    <!-- Cart Section -->
    <div v-if="cart.length > 0" class="cart-section">
      <h3>Your Cart</h3>
      <ul>
        <li v-for="item in cart" :key="item.id">
          {{ item.name }} - ${{ item.price }}
          <button @click="removeFromCart(item)">Remove</button>
        </li>
      </ul>
      <div class="total">
        <strong>Total:</strong> ${{ total }}
      </div>
      <button @click="checkout">Checkout</button>
    </div>

    <!-- No items in cart message -->
    <div v-else class="no-items">
      <p>Your cart is empty. Add products to your cart to start shopping!</p>
    </div>
  </div>
</template>

<script>
import { inject } from 'vue';
export default {
  data() {
    return {
      products: [
        { id: 1, name: 'Protein Powder', description: 'A high-quality protein powder for muscle gain.', price: 29.99, image: 'https://via.placeholder.com/150' },
        { id: 2, name: 'Yoga Mat', description: 'Non-slip yoga mat for comfort and support.', price: 19.99, image: 'https://via.placeholder.com/150' },
        { id: 3, name: 'Dumbbells', description: 'Pair of durable dumbbells for home workouts.', price: 49.99, image: 'https://via.placeholder.com/150' },
        { id: 4, name: 'Resistance Bands', description: 'Set of resistance bands for strength training.', price: 15.99, image: 'https://via.placeholder.com/150' }
      ],
      cart: []
    };
  },
  computed: {
    total() {
      return this.cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);
    }
  },
  methods: {
    addToCart(product) {
      this.cart.push(product); // Add product to cart
      console.log(`${product.name} added to cart`);
    },
    removeFromCart(product) {
      this.cart = this.cart.filter(item => item.id !== product.id); // Remove product from cart
      console.log(`${product.name} removed from cart`);
    },
    checkout() {
      alert(`Your total is $${this.total}. Proceeding to checkout...`);
      // Implement your checkout logic here
    }
  },
  
};
</script>

<style scoped>
.shopping-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
}

.product-card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.product-card {
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  width: 250px;
  padding: 15px;
  text-align: center;
}

.product-card img {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

button {
  background-color: #007bff;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

.cart-section {
  margin-top: 30px;
}

.cart-section h3 {
  font-size: 1.5rem;
  color: #333;
}

.cart-section ul {
  list-style: none;
  padding: 0;
}

.cart-section li {
  margin-bottom: 10px;
}

.total {
  font-size: 1.2rem;
  font-weight: bold;
  margin-top: 20px;
}

.no-items {
  text-align: center;
  font-size: 1.2rem;
  color: #7f8c8d;
}
</style>
