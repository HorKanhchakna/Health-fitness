<template>
  <header class="header">
    <div class="logo">
      <img src="../assets/logo.png" alt="Health & Fitness Logo" />
    </div>
    <nav class="nav">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/workout">Workout</router-link></li>
        <li><router-link to="/nutrition">Nutrition</router-link></li>
        <li><router-link to="/health-wellness">Health & Wellness</router-link></li>
        <li><router-link to="/shopping">Shop</router-link></li>
      </ul>
    </nav>
    <div class="icons">
      <a href="#"><Search size="24" /></a>
      <a href="#"><User size="24" /></a>
      <a href="#"><ShoppingCart size="24" /></a>
    </div>
  </header>
</template>


<script>
import { Search, User, ShoppingCart } from '@element-plus/icons-vue';
export default {
  name: "NavbarSection",
  components: {
    Search,
    User,
    ShoppingCart,
  },
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  background-color: #bdee82;
  border-bottom: 2px solid #eee;
  position: sticky;
  top: 0;
  z-index: 1000;
}

/* Logo */
.logo img {
  height: 60px;
}

/* Navigation */
.nav ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav li {
  margin: 0 15px;
}

.nav li a {
  text-decoration: none;
  color: #333;
  font-weight: 600;
  font-size: 16px;
  transition: color 0.3s;
}

.nav li a:hover {
  color: #007bff;
}

/* Icons */
.icons {
  margin-right: 80px;
  display: flex;
  gap: 30px;
}

.icons a  {
  color:black;
  height: 30px;
  width: 30px;
  transition: transform 0.3s ease;
}

.icons a:hover  {
  transform: scale(1.1);
  color:blue;
}

/* Responsive design */
@media (max-width: 768px) {
  .header {
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
  }

  .logo img {
    margin-bottom: 10px;
  }

  .nav ul {
    flex-direction: column;
    margin-top: 10px;
  }

  .nav li {
    margin: 10px 0;
  }

  .icons {
    justify-content: center;
    margin-top: 10px;
  }
}
</style>
