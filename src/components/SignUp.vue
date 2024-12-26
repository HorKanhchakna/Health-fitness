<template>
  <div class="signup-container">
    <!-- Form Section -->
    <div class="signup-form">
      <h1>Sign up</h1>
      <p>
        Already have an account?
        <a href="#" @click.prevent="navigateToSignIn">Sign in</a>
      </p>
      <form @submit.prevent="handleSignUp">
        <div class="form-group">
          <input type="text" placeholder="Username" v-model="formData.username" required />
        </div>
        <div class="form-group">
          <input type="email" placeholder="Email" v-model="formData.email" required />
        </div>
        <div class="form-group">
          <input type="password" placeholder="Password" v-model="formData.password" required />
        </div>
        <div class="form-group">
          <input
            type="password"
            placeholder="Confirm Password"
            v-model="formData.confirmPassword"
            required
          />
        </div>
        <button type="submit" :disabled="isLoading">
          {{ isLoading ? 'Signing up...' : 'Sign up' }}
        </button>

        <p v-if="passwordMismatch" style="color: red;">Passwords do not match</p>
      </form>
      <div class="social-login">
        <span>Or</span>
        <button @click="loginWith('Google')">Login with Google</button>
        <button @click="loginWith('Facebook')">Login with Facebook</button>
      </div>
    </div>

    <!-- Illustration Section -->
    <div class="signup-illustration">
      <img
        src="https://static.vecteezy.com/system/resources/previews/045/721/160/non_2x/yoga-woman-with-plants-and-leaves-on-her-back-on-transparent-background-free-png.png"
        alt="Illustration"
      />
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
  return {
    formData: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    passwordMismatch: false,
    isLoading: false, // Add a loading state
  };
},
  methods: {
    navigateToSignIn() {
      this.$router.push("/signin");
    },
    async handleSignUp() {
      if (this.formData.password !== this.formData.confirmPassword) {
        this.passwordMismatch = true;
        return;
      }

      this.isLoading = true; // Set loading state to true before API call

      try {
        const response = await axios.post("http://localhost:3000/signup", {
          username: this.formData.username,
          email: this.formData.email,
          password: this.formData.password,
        });
        console.log("User signed up:", response.data);
        this.$router.push("/"); // Redirect to home page or dashboard
      } catch (error) {
        console.error("Error signing up:", error);
        alert("Error signing up. Please try again.");
      } finally {
        this.isLoading = false; // Set loading state to false after API call is complete
      }
    },

  },
};

</script>

<style scoped>
.signup-container {
  display: flex;
  height: 75vh;
  background-color: #f4f4f4;
  width: 50%;
  margin: 20px auto;
  border-radius: 20px;
}

.signup-form {
  flex: 1;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;

}

.signup-form h1 {
  font-size: 2rem;
  margin-bottom: 10px;
}

.signup-form p {
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

.signup-illustration {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #bdee82;
  border-radius: 20px;
}

.signup-illustration img {
  width: 100%;
  height: auto;

}
</style>
