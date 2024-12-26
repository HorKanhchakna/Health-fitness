<template>
  <div class="health-wellness-page">
    <h2 class="title">Health & Wellness</h2>
    <p class="intro">Discover tips and resources to live a balanced and healthy life.</p>

    <!-- Wellness Tips -->
    <div class="wellness-card-container">
      <WellnessCard
        v-for="card in wellnessTips"
        :key="card.id"
        :card="card"
        @click="showDetail(card)"
      />
    </div>

    <!-- Modal for More Details -->
    <div v-if="selectedTip" class="modal-overlay" @click.self="closeDetail">
      <div class="modal-content">
        <h3>{{ selectedTip.title }}</h3>
        <img :src="selectedTip.image" alt="Tip image" class="modal-image" />
        <p>{{ selectedTip.description }}</p>
        <h4>Benefits:</h4>
        <ul>
          <li v-for="benefit in selectedTip.benefits" :key="benefit">{{ benefit }}</li>
        </ul>
        <button @click="closeDetail">Close</button>
      </div>
    </div>
  </div>
</template>

<script>
import WellnessCard from '../components/WellnessCard.vue';
import ResourcesSection from '../components/ResourcesSection.vue';

export default {
  name: "HealthWellnessPage",
  components: {
    WellnessCard,
    ResourcesSection,
  },
  data() {
    return {
      wellnessTips: [
        {
          id: 1,
          title: "Meditation & Mindfulness",
          description: "Learn the art of mindfulness to reduce stress and improve mental clarity.",
          benefits: ["Reduces stress", "Improves focus", "Enhances emotional well-being"],
          image: "https://example.com/mindfulness.jpg",
        },
        {
          id: 2,
          title: "Healthy Eating",
          description: "Adopt a balanced diet for improved energy and overall health.",
          benefits: ["Boosts immunity", "Supports weight management", "Improves mood"],
          image: "https://example.com/healthy-eating.jpg",
        },
        {
          id: 3,
          title: "Physical Activity",
          description: "Engage in regular exercise to strengthen your body and boost your mood.",
          benefits: ["Improves cardiovascular health", "Enhances flexibility", "Reduces anxiety"],
          image: "https://example.com/physical-activity.jpg",
        },
        {
          id: 4,
          title: "Sleep Hygiene",
          description: "Develop good sleep habits to rejuvenate your mind and body.",
          benefits: ["Improves focus", "Boosts immune system", "Enhances overall well-being"],
          image: "https://example.com/sleep-hygiene.jpg",
        },
        {
          id: 5,
          title: "Hydration",
          description: "Stay hydrated to maintain optimal bodily functions and energy levels.",
          benefits: ["Supports digestion", "Improves skin health", "Enhances physical performance"],
          image: "https://example.com/hydration.jpg",
        },
        {
          id: 6,
          title: "Social Connection",
          description: "Foster strong relationships to boost emotional and mental health.",
          benefits: ["Reduces loneliness", "Improves happiness", "Strengthens resilience"],
          image: "https://example.com/social-connection.jpg",
        },
      ],
      selectedTip: null, // to store the selected tip
      relatedResources: [
        { title: "10 Tips for Healthy Living", link: "https://example.com/healthy-living" },
        { title: "Meditation Basics", link: "https://example.com/meditation" },
      ],
    };
  },
  methods: {
    showDetail(card) {
      this.selectedTip = card; // populate the selectedTip with the clicked card's data
    },
    closeDetail() {
      this.selectedTip = null; // reset selectedTip when modal is closed
    },
  },
};
</script>

<style scoped>
/* General Page Styling */
.health-wellness-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
}

.title {
  text-align: center;
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 15px;
}

.intro {
  text-align: center;
  font-size: 1.2rem;
  color: #7f8c8d;
  margin-bottom: 30px;
}

.wellness-card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

/* Modal Styling */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  max-width: 500px;
  width: 90%;
}

.modal-image {
  max-width: 100%;
  height: auto;
  margin-bottom: 20px;
}

button {
  background: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background: #0056b3;
}
</style>
