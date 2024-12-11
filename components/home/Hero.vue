<template>
  <section class="columnAlignCenter bg-gradient-black">
    <div class="w-full bannerContainer rowAlignCenter">
      <div v-for="(banner, index) in banners" :key="index" class="columnAlignCenter">
        <div class="title bg-white">
          <h1>COCINA</h1>
        </div>
        <NuxtImg src="/images/banner-hero.png" alt="Hero" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      banners: [
        {
          title: "COCINA",
          image: "/images/banner-hero.png",
        },
      ],
    };
  },
};
</script>

<style scoped>
.bannerContainer > div {
  gap: 1.25rem;
}

.title {
  border-radius: 999px;
  box-shadow: 0px 0px 1.9px 0px #00000040;
  padding: 0.25rem 1rem;
}

.bannerContainer > div img {
  width: 75%;
  max-width: 230px;
}
</style>
