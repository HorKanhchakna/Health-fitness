<template>
  <div class="workout-page">
    <header class="header">
      <div class="header-content">
        <h1>Free Workout Plans</h1>
        <p>
          The most comprehensive database of free workout routines anywhere! Download workout plans for any goal or experience level.
        </p>
      </div>
    </header>

    <main class="main-content">
      <section class="categories">
        <h2>Workout Categories</h2>
        <p>
          Choose a category that best suits the workout you're searching for. Use the options below to explore workouts tailored to your experience and goals.
        </p>
        <div class="grid-section">
          <div
            class="card-wrapper"
            v-for="(item, index) in workoutCategories"
            :key="index"
          >
            <div class="card">
              <img :src="item.image || '/src/assets/default-image.jpg'" :alt="item.name" />
              <div class="card-content">
                <h3>{{ item.name }}</h3>
                <p>{{ item.description }}</p>
              </div>
              <button class="card-button" @click="navigateToPage(item.name)">
                Explore {{ item.name }}
              </button>
            </div>
          </div>
        </div>
      </section>

      <section class="new-workout">
        <h2>New Workouts</h2>
        <p>Check out the latest additions to our workout database!</p>
        <div class="grid-section">
          <div
            class="card-wrapper"
            v-for="(item, index) in newWorkouts"
            :key="index"
          >
            <div class="card">
              <img :src="item.image || '/src/assets/default-image.jpg'" :alt="item.name" />
              <div class="card-content">
                <h3>{{ item.name }}</h3>
                <p>{{ item.description }}</p>
              </div>
              <button class="card-button" @click="navigateToPage(item.name)">
                Try {{ item.name }}
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>

export default {
  name: "WorkoutPage",
  data() {
    return {
      workoutCategories: [
        { id: 1, name: "Workouts For Men", image: "/src/assets/workouts-for-men.jpg", description: "Tailored plans for building strength and endurance." },
        { id: 2, name: "Workouts For Women", image: "/src/assets/workouts-for-women.jpg", description: "Achieve your fitness goals with these targeted workouts." },
        { id: 3, name: "Full Body", image: "/src/assets/full-body.jpg", description: "Comprehensive routines to engage all muscle groups." },
        { id: 4, name: "Fat Loss", image: "/src/assets/fat-loss.jpg", description: "Burn calories and shred fat effectively." },
        { id: 5, name: "Muscle Building", image: "/src/assets/muscle-building.jpg", description: "Grow muscle with scientifically proven methods." },
        { id: 6, name: "Strength Training", image: "/src/assets/strength-training.jpg", description: "Boost your strength and improve performance." },
        { id: 7, name: "Cardio Workouts", image: "/src/assets/cardio-workouts.jpg", description: "Keep your heart healthy with these cardio routines." },
        { id: 8, name: "Yoga and Flexibility", image: "/src/assets/yoga-flexibility.jpg", description: "Improve flexibility and relax your mind and body." },
      ],
      newWorkouts: [
      { id: 1, name: "HIIT Blast", image: "/src/assets/hiit-blast.jpg", description: "High-intensity interval training for quick results." },
      { id: 2, name: "Power Yoga", image: "/src/assets/power-yoga.jpg", description: "A dynamic yoga routine for strength and flexibility." },
      { id: 3, name: "Core Crusher", image: "/src/assets/core-crusher.jpg", description: "Focused on building a strong core." },
      { id: 4, name: "Functional Fitness", image: "/src/assets/functional-fitness.jpg", description: "Enhance everyday movement and strength." },
    ],
    };
  },
  methods: {
    navigateToPage(category) {
    this.$router.push(`/workouts/${category}`);
  },
  },
};
</script>

<style scoped>
/* General Styles */
.workout-page {
  font-family: Arial, sans-serif;
  color: #333;
}

header {
  background-image: url("https://cdn.muscleandstrength.com/sites/default/files/8_weeks_to_flat_stomach_-_1200x630.jpg");
  background-size: cover;
  background-position: center;
  color: white;
  text-align: center;
  padding: 150px 20px;
  position: relative;
}

header::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3));
  z-index: 0;
}

.header-content {
  position: relative;
  z-index: 1;
  max-width: 800px;
  margin: auto;
}

.header-content h1 {
  font-size: 4.5rem;
  font-weight: bold;
  margin-bottom: 20px;
}

.header-content p {
  font-size: 2.0rem;
  margin-bottom: 20px;
}

/* Categories Section */
.categories,
.new-workout {
  margin: 50px 0;
  text-align: center;
}

.categories h2,
.new-workout h2 {
  font-size: 2.5rem;
  color: #3a3af3;
}

.grid-section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 20px;
  margin-top: 50px;
}

.card {
  margin-top: 60px;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
}

.card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.card-content {
  padding: 15px;
}

.card-content h3 {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.card-content p {
  font-size: 1rem;
  color: #666;
}

.card-button {
  background-color: #0dc30d;
  color: white;
  padding: 10px;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 10px auto;
}

.card-button:hover {
  background-color: green;
}
</style>
