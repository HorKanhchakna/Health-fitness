<template>
  <div class="workout-details">
    <h1>{{ category }} Workouts</h1>
    <p>Here are the best workout plans for {{ category }}. Choose the one that fits your goals.</p>

    <div class="workout-plans">
      <div v-for="(plan, index) in workoutPlans" :key="index" class="workout-card">
        <h3>{{ plan.name }}</h3>
        <p><strong>Description:</strong> {{ plan.description }}</p>
        <p><strong>Duration:</strong> {{ plan.duration }} weeks</p>
        <p><strong>Intensity:</strong> {{ plan.intensity }}</p>
        <button class="start-button" @click="startWorkout(plan)">Start Workout</button>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "WorkoutDetails",
  props: ["category"],
  data() {
    return {
      workoutPlans: [],
    };
  },
  created() {
    this.loadWorkouts();
  },
  methods: {
    loadWorkouts() {
      const workouts = {
        "Workouts For Men": [
          { name: "Strength & Endurance", description: "A workout plan focused on building strength and endurance.", duration: 8, intensity: "High" },
          { name: "Muscle Gain", description: "Tailored for muscle growth, using progressive overload.", duration: 10, intensity: "Medium" },
          { name: "Fat Burning", description: "Combine cardio and strength training to shed fat.", duration: 6, intensity: "High" },
          { name: "Core Strength", description: "Focus on strengthening the core muscles for better stability.", duration: 4, intensity: "Medium" }
        ],
        "Workouts For Women": [
          { name: "Full Body Strength", description: "Build overall strength with a mix of compound exercises.", duration: 8, intensity: "Medium" },
          { name: "Lean & Toned", description: "Workouts designed to tone muscles and burn fat.", duration: 6, intensity: "Medium" },
          { name: "Cardio & Core", description: "Focus on cardio exercises and strengthening the core.", duration: 4, intensity: "High" },
          { name: "Booty Building", description: "A targeted workout for sculpting and lifting the glutes.", duration: 6, intensity: "Medium" }
        ],
        "Full Body": [
          { name: "Total Body Workout", description: "Full body routine targeting all major muscle groups.", duration: 8, intensity: "High" },
          { name: "Bodyweight Strength", description: "Strength exercises using just your body weight.", duration: 6, intensity: "Medium" },
          { name: "Circuit Training", description: "Full body workout in the form of circuits to improve overall fitness.", duration: 4, intensity: "High" },
          { name: "HIIT (High-Intensity Interval Training)", description: "Intense full-body workouts for maximum fat burning.", duration: 6, intensity: "High" }
        ],
        "Fat Loss": [
          { name: "Fat Burning Cardio", description: "Focused on high-intensity cardio for calorie burn.", duration: 6, intensity: "High" },
          { name: "HIIT for Fat Loss", description: "High-Intensity Interval Training focused on burning fat.", duration: 8, intensity: "Very High" },
          { name: "Full Body Fat Burn", description: "Combination of strength and cardio to maximize fat burning.", duration: 6, intensity: "High" },
          { name: "Lean & Shredded", description: "A plan focused on reducing body fat while maintaining lean muscle.", duration: 8, intensity: "Medium" }
        ],
        "Muscle Building": [
          { name: "Strength Training", description: "Build strength through heavy lifting and compound movements.", duration: 8, intensity: "High" },
          { name: "Hypertrophy Training", description: "Aimed at muscle growth using higher reps and moderate weights.", duration: 10, intensity: "Medium" },
          { name: "Bodybuilding Routine", description: "A split workout routine targeting muscle growth in specific muscle groups.", duration: 12, intensity: "High" },
          { name: "Muscle Gain Full Body", description: "Full body workout focused on muscle hypertrophy.", duration: 6, intensity: "Medium" }
        ],
        "Strength Training": [
          { name: "Powerlifting Routine", description: "Focus on increasing maximal strength in squat, deadlift, and bench press.", duration: 12, intensity: "Very High" },
          { name: "Strength and Conditioning", description: "A mix of strength training and conditioning for overall performance.", duration: 8, intensity: "High" },
          { name: "Olympic Lifting", description: "Master Olympic lifts like clean & jerk and snatch.", duration: 10, intensity: "High" },
          { name: "Functional Strength", description: "Improve strength for everyday functional movements.", duration: 6, intensity: "Medium" }
        ],
        "Cardio Workouts": [
          { name: "Running Plan", description: "A plan focused on building endurance and improving running performance.", duration: 8, intensity: "Medium" },
          { name: "HIIT Cardio", description: "High-Intensity Interval Training for improving cardiovascular health.", duration: 4, intensity: "High" },
          { name: "Cycling Plan", description: "A cycling workout program for endurance and leg strength.", duration: 6, intensity: "Medium" },
          { name: "Jump Rope Workouts", description: "High-intensity cardio workout using a jump rope.", duration: 4, intensity: "High" }
        ],
        "Yoga and Flexibility": [
          { name: "Beginner Yoga", description: "A basic yoga routine for improving flexibility and reducing stress.", duration: 6, intensity: "Low" },
          { name: "Power Yoga", description: "A more intense yoga workout aimed at building strength and flexibility.", duration: 8, intensity: "Medium" },
          { name: "Stretch and Flex", description: "Focus on stretching exercises to improve flexibility and mobility.", duration: 4, intensity: "Low" },
          { name: "Vinyasa Flow", description: "A dynamic yoga sequence that promotes flexibility, balance, and strength.", duration: 8, intensity: "Medium" }
        ],
      };
      this.workoutPlans = workouts[this.category] || [];
    },
    startWorkout(plan) {
      console.log(`Starting ${plan.name} workout!`);
      // Add logic to navigate or trigger a workout session.
    }
  },
};
</script>

<style scoped>
.workout-details {
  padding: 20px;
  text-align: center;
  font-family: Arial, sans-serif;
}

.workout-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.workout-card {
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: left;
}

.workout-card img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 5px;
}

.workout-card h2 {
  font-size: 1.5rem;
  color: #007bff;
  margin-bottom: 10px;
}

.workout-card p {
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 10px;
}

.workout-card strong {
  color: #333;
}
</style>
