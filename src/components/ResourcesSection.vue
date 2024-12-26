<template>
  <div class="resources-section">
    <h3 class="resources-title">Additional Resources</h3>
    <ul class="resources-list">
      <li v-for="(resource, index) in resources" :key="index">
        <a :href="resource.link" target="_blank">{{ resource.title }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ResourcesSection",
  props: {
    resources: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.resources-section {
  margin-top: 40px;
  padding: 20px;
  background-color: #ecf0f1;
  border-radius: 8px;
  text-align: center;
}

.resources-title {
  font-size: 1.5rem;
  color: #2c3e50;
  margin-bottom: 15px;
}

.resources-list {
  list-style: none;
  padding: 0;
}

.resources-list li {
  margin-bottom: 10px;
}

.resources-list li a {
  color: #2980b9;
  text-decoration: none;
  font-size: 1rem;
}

.resources-list li a:hover {
  text-decoration: underline;
}
</style>
