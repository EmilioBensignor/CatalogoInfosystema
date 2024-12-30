<template>
  <section class="w-full columnAlignCenter bg-gradient-black">
    <div class="w-full bannerContainer columnAlignCenter">
      <Carousel
        :value="banners"
        :numVisible="1"
        :numScroll="1"
        circular
        :autoplayInterval="300000000"
        :showNavigators="false"
        :showIndicators="true"
      >
        <template #item="slotProps">
          <div class="banner columnAlignCenter">
            <div class="title bg-white">
              <h1>{{ slotProps.data.title }}</h1>
            </div>
            <NuxtImg
              :src="`/images/${slotProps.data.img}.png`"
              :alt="slotProps.data.alt"
            />
          </div>
        </template>
      </Carousel>
      <!-- <HomeCategories /> -->
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      banners: [
        {
          title: "Cocina",
          img: "banner-hero",
          alt: "Banner Hero",
        },
        {
          title: "Hogar",
          img: "banner-hero",
          alt: "Banner Hero",
        },
        {
          title: "Baño",
          img: "banner-hero",
          alt: "Banner Hero",
        },
      ],
    };
  },
};
</script>

<style scoped>
.bannerContainer {
  gap: 2.5rem;
  overflow: hidden;
}

.banner {
  width: 100%;
  position: relative;
  gap: 1.25rem;
  padding: 3.5rem 0 0.75rem 0;
}

.bannerContainer > div img {
  width: 75%;
  max-width: 280px;
}

.title {
  position: absolute;
  top: 0;
  left: 50%;
  z-index: 1;
  background-color: var(--color-white);
  transform: translateX(-50%);
  border-radius: 999px;
  padding: 0.25rem 1.25rem;
}

:deep(.p-carousel-indicator) {
  width: 6px;
  height: 6px;
  border: 1px solid #F5F3F3;
  border-radius: 50%;
  margin: 0 4px;
}

:deep(.p-carousel-indicator-active) {
  background-color: #F5F3F3;
}

@media (width >=660px) {
  .banner {
    padding: 4rem 0 0.75rem 0;
  }

  .title {
    padding: 0.35rem 1.75rem;
  }
}
</style>
