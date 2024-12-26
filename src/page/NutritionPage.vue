<template>
  <div class="nutrition-page">
    <h2 class="title">Nutrition Plans</h2>

    <!-- Filter options -->
    <div class="filter-section">
      <label for="filter" class="filter-label">Filter by: </label>
      <select v-model="filter" id="filter" class="filter-dropdown">
        <option value="">All</option>
        <option value="keto">Keto</option>
        <option value="vegan">Vegan</option>
        <option value="paleo">Paleo</option>
        <option value="intermittent">Intermittent Fasting</option>
        <option value="low-carb">Low Carb</option>
        <option value="plant-based">Plant-Based</option> <!-- Ensure this matches exactly -->
        <option value="mediterranean">Mediterranean</option>
        <option value="dash diet">DASH Diet</option>
        <option value="whole30">Whole30</option>
      </select>
    </div>

    <!-- Display nutrition plans -->
    <div v-for="plan in filteredPlans" :key="plan.id">
      <NutritionPlanCard :plan="plan" />
    </div>
  </div>
</template>

<script>
import NutritionPlanCard from '../components/NutritionPlanCard.vue'
export default {
  name: "NutritionPage",
  components: {
    NutritionPlanCard
  },
  data() {
    return {
      nutritionPlans: [
        { id: 1, name: 'Keto Diet', description: 'A low-carb, high-fat diet for weight loss.', benefits: 'Helps burn fat faster, controls blood sugar.', duration: 30, image: 'https://example.com/keto-diet.jpg', recommendedFor: 'Weight loss, improved energy levels', type: 'keto' },
        { id: 2, name: 'Vegan Meal Plan', description: 'A plant-based meal plan for overall wellness.', benefits: 'Promotes heart health, boosts energy.', duration: 30, image: 'https://example.com/vegan-meal.jpg', recommendedFor: 'Health-conscious individuals, ethical eaters', type: 'vegan' },
        { id: 3, name: 'Paleo Diet', description: 'A whole foods diet based on eating like early humans.', benefits: 'Improves digestion, boosts metabolism.', duration: 30, image: 'https://example.com/paleo-diet.jpg', recommendedFor: 'Those seeking a balanced, whole-foods diet', type: 'paleo' },
        { id: 4, name: 'Intermittent Fasting', description: 'An eating pattern that alternates between fasting and eating periods.', benefits: 'Supports weight loss, improves metabolism.', duration: 28, image: 'https://example.com/intermittent-fasting.jpg', recommendedFor: 'Those looking for flexible eating schedules', type: 'intermittent' },
        { id: 5, name: 'Mediterranean Diet', description: 'A diet rich in fruits, vegetables, whole grains, and healthy fats.', benefits: 'Supports heart health, reduces inflammation.', duration: 30, image: 'https://example.com/mediterranean-diet.jpg', recommendedFor: 'Heart health, longevity, balanced nutrition', type: 'mediterranean' },
        { id: 6, name: 'DASH Diet', description: 'A diet focused on reducing high blood pressure by increasing potassium and reducing sodium.', benefits: 'Reduces blood pressure, supports cardiovascular health.', duration: 30, image: 'https://example.com/dash-diet.jpg', recommendedFor: 'People with high blood pressure or heart disease risk', type: 'dash diet' },
        { id: 7, name: 'Whole30 Diet', description: 'A 30-day program that eliminates processed foods, sugar, and alcohol.', benefits: 'Improves digestion, reduces inflammation, boosts energy.', duration: 30, image: 'https://example.com/whole30-diet.jpg', recommendedFor: 'Those looking for a reset in their eating habits', type: 'whole30' },
        { id: 8, name: 'Low-FODMAP Diet', description: 'A diet designed to reduce digestive symptoms by eliminating certain fermentable carbs.', benefits: 'Reduces bloating, gas, and digestive discomfort.', duration: 30, image: 'https://example.com/low-fodmap-diet.jpg', recommendedFor: 'Individuals with IBS or digestive issues', type: 'low-carb' },
        { id: 9, name: 'Flexitarian Diet', description: 'A flexible vegetarian diet that encourages plant-based meals but allows occasional meat consumption.', benefits: 'Supports weight loss, reduces environmental impact.', duration: 30, image: 'https://example.com/flexitarian-diet.jpg', recommendedFor: 'People looking to reduce meat consumption without fully committing to vegetarianism', type: 'plant-based' },
        { id: 10, name: 'Anti-Inflammatory Diet', description: 'A diet focused on reducing inflammation by emphasizing foods like fruits, vegetables, and healthy fats.', benefits: 'Reduces chronic inflammation, supports immune health.', duration: 30, image: 'https://example.com/anti-inflammatory-diet.jpg', recommendedFor: 'People with autoimmune conditions or chronic inflammation', type: 'anti-inflammatory' }
      ],
      filter: ''
    };
  },
  computed: {
    filteredPlans() {
      if (!this.filter) {
        return this.nutritionPlans;
      }
      return this.nutritionPlans.filter(plan =>
        plan.type.toLowerCase().includes(this.filter.toLowerCase())
      );
    }
  }
};
</script>

<style scoped>
.nutrition-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
}

.title {
  text-align: center;
  font-size: 2rem;
  color: #333;
  margin-bottom: 30px;
}

.filter-section {
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
}

.filter-label {
  font-size: 1rem;
  margin-right: 10px;
}

.filter-dropdown {
  padding: 8px 12px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
