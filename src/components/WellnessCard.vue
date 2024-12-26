<template>
  <div class="wellness-card">
    <img :src="card.image" :alt="card.title" class="card-image" />
    <div class="card-content">
      <h3 class="card-title">{{ card.title }}</h3>
      <p class="card-description">{{ card.description }}</p>
      <ul class="card-benefits">
        <li v-for="(benefit, index) in card.benefits" :key="index">
          <i class="fa fa-check-circle"></i> {{ benefit }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "WellnessCard",
  props: {
    card: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.wellness-card {
  width: 300px;
  background: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.2s;
}

.wellness-card:hover {
  transform: scale(1.05);
}

.card-image {
  width: 100%;
  height: 180px;
  object-fit: cover;
}

.card-content {
  padding: 15px;
}

.card-title {
  font-size: 1.3rem;
  color: #34495e;
  margin-bottom: 10px;
}

.card-description {
  font-size: 1rem;
  color: #7f8c8d;
  margin-bottom: 15px;
}

.card-benefits {
  list-style: none;
  padding: 0;
  margin: 0;
}

.card-benefits li {
  font-size: 0.9rem;
  color: #2ecc71;
  margin-bottom: 5px;
}

.card-benefits li i {
  margin-right: 8px;
}
</style>
