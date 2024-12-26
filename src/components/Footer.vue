<template>
  <footer class="footer">
    <p>&copy; 2024 Daily Well. All rights reserved.</p>
    <div class="social-icons">
      <a href="#" class="social-icon">FB</a>
      <a href="#" class="social-icon">IG</a>
      <a href="#" class="social-icon">TW</a>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterSection",
};
</script>

<style scoped>
.footer {
  background-color: #BDEE82;
  text-align: center;
  padding: 20px;
  border-top: 2px solid #eee;
}

.footer p {
  margin: 0;
  font-size: 14px;
}

.social-icons {
  margin-top: 10px;
}

.social-icon {
  text-decoration: none;
  color: #333;
  margin: 0 10px;
  font-weight: bold;
  transition: color 0.3s;
}

.social-icon:hover {
  color: #007BFF;
}
</style>

