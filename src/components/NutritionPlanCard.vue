<template>
  <div class="plan-card">
    <h3 class="plan-title">{{ plan.name }}</h3>
    <p class="plan-description">{{ plan.description }}</p>
    <button @click="showDetails" class="view-details-btn">View Details</button>

    <!-- Display plan details on click -->
    <div v-if="isSelected" class="plan-details">
      <p><strong>Benefits:</strong> {{ plan.benefits }}</p>
      <p><strong>Duration:</strong> {{ plan.duration }} days</p>
      <img :src="plan.image" :alt="plan.name" class="plan-image" />
      <p><strong>Recommended for:</strong> {{ plan.recommendedFor }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "NutritionPlanCard",
  props: {
    plan: Object
  },
  data() {
    return {
      isSelected: false
    };
  },
  methods: {
    showDetails() {
      this.isSelected = !this.isSelected;
    }
  }
};
</script>

<style scoped>
.plan-card {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 20px 0;
  transition: box-shadow 0.3s ease;
}

.plan-card:hover {
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.2);
}

.plan-title {
  font-size: 1.5rem;
  color: #007bff;
  margin-bottom: 10px;
}

.plan-description {
  font-size: 1rem;
  color: #555;
  margin-bottom: 20px;
}

.view-details-btn {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;
}

.view-details-btn:hover {
  background-color: #0056b3;
}

.plan-details {
  margin-top: 20px;
  font-size: 1rem;
  color: #333;
}

.plan-details p {
  margin: 8px 0;
}

.plan-image {
  max-width: 100%;
  height: auto;
  border-radius: 4px;
  margin-top: 15px;
}
</style>
