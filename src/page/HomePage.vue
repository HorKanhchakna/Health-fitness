<template>
  <div class="container">
    <HeaderSection />
    <CardGridSection />
  </div>
</template>

<script>
import HeaderSection from '../components/HeaderSection.vue';
import CardGridSection from '../components/CardGridSection.vue';

export default {
  components: {
    HeaderSection,
    CardGridSection,
  },
};
</script>
