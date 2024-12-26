<template>
  <header>
    <div class="header-content">
      <h1>Welcome to DailyWell</h1>
      <p>
        Led by CD Singh, DailyWell is a non-governmental organization dedicated
        to transforming lives through education. Operating from our main campus
        in Phnom Penh and seven provincial centers across rural Cambodia, we
        empower underprivileged youth with comprehensive education programs
        focused on English proficiency, IT literacy, and career development.
      </p>
      <button @click="getStarted">Get Started</button>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    getStarted() {
      const hasAccount = this.checkAccountStatus();
      if (hasAccount) {
        this.$router.push("/");
      } else {
        this.$router.push("/signup");
      }
    },
    checkAccountStatus() {
      return false; // Adjust this logic as needed.
    },
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  margin: 0 auto;
}

header {
  background-image: url('/src/assets/hero-image.jpg');
  background-size: cover;
  background-position: center;
  color: white;
  display: flex;
  align-items: center;
  padding: 170px 20px;
  position: relative;
  margin-top:-20px;
}

header::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
}

.header-content {
  z-index: 1;
  max-width: 800px;
  margin-top: -10px; /* Limits the width of content */
}
.header-content p{
  font-size: 1.7rem;
}

header h1 {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 15px;
  color: black;
}

header p {
  font-size: 1.1rem;
  width: 100%;
  margin-bottom: 30px;
  color: black;
  padding: 2px;
}

header button {
  background-color: rgb(13, 203, 13);
  color: white;
  border: none;
  padding: 12px 25px;
  font-size: 1.2rem;
  cursor: pointer;
  border-radius: 5px;
}

header button:hover {
  background-color: green;
  transition: 0.7s;
}

</style>
