<template>
  <main>
    <div class="grid-section">
      <div class="card-wrapper" v-for="(item, index) in cards" :key="index">
        <div class="card">
          <img :src="item.image" :alt="item.title" />
        </div>
        <button class="card-button" @click="navigateToPage(item.title)">
          {{ item.title }}
        </button>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  methods: {
    navigateToPage(title) {
      const routes = {
        "Work Out": "/pageworkout",
        "Nutrition": "/pagenutrition",
        "Health & wellness": "/pagehealth-wellness",
        "Advice": "/pageadvice",
        "Shop": "/pageshopping",
        "About Us": "/pageabout-us",
      };
      const route = routes[title] || "/";
      this.$router.push(route);
    },
  },
  data() {
    return {
      cards: [
        {
          image:
            "https://png.pngtree.com/png-clipart/20230927/original/pngtree-mental-health-meditation-illustration-png-image_13147769.png",
          title: "Work Out",
        },
        {
          image:
            "https://domf5oio6qrcr.cloudfront.net/medialibrary/13503/conversions/bigstock-Health-food-selection-super-foods-fruits-veggies-thumb.jpg",
          title: "Nutrition",
        },
        {
          image:
            "https://media.licdn.com/dms/image/v2/D4D12AQF-UNBK1Cd76A/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1692008950713?e=2147483647&v=beta&t=np9IYeph2hO3qky7DCqB0sM5KvXP3HWTBT5bknBBlnY",
          title: "Health & wellness",
        },
        {
          image:
            "https://media.licdn.com/dms/image/C5112AQFLIas_No35Ow/article-cover_image-shrink_720_1280/0/1543235157897?e=2147483647&v=beta&t=OqPuvbh32SP2XINRkFDitT5rTFqJcQ_S9DyfN3638dg",
          title: "Advice",
        },
        {
          image:
            "https://media.licdn.com/dms/image/D4D12AQGnhu69cCeQjw/article-cover_image-shrink_720_1280/0/1674801258307?e=2147483647&v=beta&t=CugLOpEvWn7IO9an8F7sWuVwA6_9QjLfp4btMJMOmZI",
          title: "Shop",
        },
        {
          image:
            "https://static.vecteezy.com/system/resources/previews/007/931/696/non_2x/about-us-button-about-us-text-template-for-website-about-us-icon-flat-style-vector.jpg",
          title: "About Us",
        },
      ],
    };
  },
};
</script>

<style scoped>
.grid-section {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 2 cards per row */
  gap: 60px; /* Larger gap for spacing */
  justify-items: center;
  padding: 40px 20px;
}

/* Card Wrapper */
.card-wrapper {
  width: 100%;
  max-width: 350px; /* Card maximum size */
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Card Styling */
.card {
  width: 100%;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  margin-bottom: 15px;
}

.card img {
  width: 100%;
  height: 250px;
  object-fit: cover;
}

/* Button Styling */
.card-button {
  width: 100%;
  background-color: #eaeaea;
  color: #333;
  border: none;
  padding: 15px 0;
  text-align: center;
  font-size: 1.1rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.card-button:hover {
  background-color: #d3d3d3;
  transition: 0.3s ease-in-out;
}

@media (max-width: 768px) {
  header h1 {
    font-size: 2.5rem;
  }

  header p {
    font-size: 1rem;
    width: 90%;
  }

  .section {
    flex-direction: column;
    align-items: center;
  }

  .card {
    width: 80%;
    margin: 10px 0;
  }
}
</style>

