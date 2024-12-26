<template>
  <div class="login-container">
    <!-- Illustration Section -->
    <div class="login-illustration">
      <img
        src="https://static.vecteezy.com/system/resources/previews/045/721/160/non_2x/yoga-woman-with-plants-and-leaves-on-her-back-on-transparent-background-free-png.png"
        alt="Illustration"
      />
    </div>

    <!-- Form Section -->
    <div class="login-form">
      <h1>Sign in</h1>
      <p>
        If you don't have an account?
        <a href="#" @click.prevent="navigateToSignUp">Sign up</a>
      </p>
      <form @submit.prevent="handleSignIn">
        <div class="form-group">
          <input type="email" placeholder="Email" v-model="formData.email" required />
        </div>
        <div class="form-group">
          <input type="password" placeholder="Password" v-model="formData.password" required />
        </div>
        <p>Forget password?</p>
        <button type="submit">Log in</button>
        <!-- Display error message -->
        <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
      </form>
      <div class="social-login">
        <span>Or</span>
        <button @click="loginWith('Google')">Login with Google</button>
        <button @click="loginWith('Facebook')">Login with Facebook</button>
      </div>
    </div>
  </div>
</template>


<script>
import axios from 'axios';

const token = localStorage.getItem("authToken");

if (token) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

export default {
  data() {
    return {
      formData: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    handleSignIn() {
      axios.post("http://localhost:3000/signin", {
        email: this.formData.email,
        password: this.formData.password,
      })
      .then(response => {
        const token = response.data.token;
        localStorage.setItem("authToken", token);  // Store token in localStorage
        this.$router.push("/");  // Redirect to the home page or dashboard
      })
      .catch(error => {
        console.error("Login error:", error.response.data);
        alert("Invalid email or password.");
      });
    },
    logout() {
      localStorage.removeItem("authToken");  // Remove the token
      this.$router.push("/signin");  // Redirect to login page
    },
    navigateToSignUp() {
      this.$router.push("/signup");  // Corrected the method name here
    },
  }
};
</script>


<style scoped>
.login-container {
  display: flex;
  height: 75vh;
  background-color: #f4f4f4;
  width: 50%;
  margin: 20px auto;
  border-radius: 20px;
}

.login-form {
  flex: 1;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.login-form h1 {
  font-size: 2rem;
  margin-bottom: 10px;
}

.login-form p {
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

input {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

.social-login {
  text-align: center;
  margin-top: 20px;
}

.social-login button{
  margin-top: 10px;
}


.login-illustration {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #bdee82;
  border-radius: 20px;
}

.login-illustration img {
  width: 100%;
  height: auto;
}
</style>
