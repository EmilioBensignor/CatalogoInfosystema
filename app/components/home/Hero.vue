<template>
  <section class="bannerSection columnAlignCenter">
    <div class="bannerContainer columnAlignCenter">
      <div class="carousel-container">
        <div class="carousel-track" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
          <div v-for="(banner, index) in banners" :key="index" class="carousel-slide">
            <picture>
              <source :srcset="`/images/banners/${banner.xl}.webp`" media="(min-width: 1200px)">
              <source :srcset="`/images/banners/${banner.l}.webp`" media="(min-width: 1080px)">
              <source :srcset="`/images/banners/${banner.m}.webp`" media="(min-width: 660px)">
              <source :srcset="`/images/banners/${banner.s}.webp`" media="(min-width: 480px)">
              <img :src="`/images/banners/${banner.xs}.webp`" :alt="banner.alt" class="bannerImage">
            </picture>
          </div>
        </div>
        <div class="carousel-pagination">
          <button v-for="(banner, index) in banners" :key="`bullet-${index}`" @click="goToSlide(index)"
            :class="['carousel-bullet', { active: currentSlide === index }]"></button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { banners } from '~/shared/banners';

const currentSlide = ref(0);
const totalSlides = banners.length;
let autoplayInterval = null;

const goToSlide = (index) => {
  currentSlide.value = index;
  resetAutoplay();
};

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % totalSlides;
};

const startAutoplay = () => {
  autoplayInterval = setInterval(() => {
    nextSlide();
  }, 5000);
};

const resetAutoplay = () => {
  if (autoplayInterval) {
    clearInterval(autoplayInterval);
  }
  startAutoplay();
};

onMounted(() => {
  startAutoplay();
});

onUnmounted(() => {
  if (autoplayInterval) {
    clearInterval(autoplayInterval);
  }
});
</script>



<style scoped>
.bannerSection {
  max-width: 100vw;
  overflow: hidden;
  padding: 0;
}

.bannerContainer {
  width: 100%;
  max-width: 1920px;
}

.carousel-container {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.carousel-track {
  display: flex;
  width: 100%;
  transition: transform 0.5s ease-in-out;
}

.carousel-slide {
  min-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

picture {
  width: 100%;
  height: 100%;
  display: flex;
}

.bannerImage {
  width: 100%;
  height: auto;
  object-fit: contain;
}

.carousel-pagination {
  position: absolute;
  bottom: 0.25rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.5rem;
  z-index: 10;
}

.carousel-bullet {
  width: 8px;
  height: 8px;
  border: 1px solid var(--color-black);
  border-radius: 50%;
  background: transparent;
  cursor: pointer;
  transition: background-color 0.3s ease;
  padding: 0;
}

.carousel-bullet.active {
  background-color: var(--color-black);
}

.carousel-bullet:hover {
  background-color: var(--color-black);
  opacity: 0.7;
}

@media (width >=660px) {
  .carousel-pagination {
    bottom: 0.75rem;
  }

  .carousel-bullet {
    width: 10px;
    height: 10px;
  }
}

@media (width >=1080px) {
  .carousel-pagination {
    bottom: 1rem;
    gap: 0.75rem;
  }

  .carousel-bullet {
    width: 12px;
    height: 12px;
  }
}

@media (width >=1440px) {
  .carousel-bullet {
    width: 14px;
    height: 14px;
  }
}

@media (width >=1920px) {
  .carousel-bullet {
    width: 16px;
    height: 16px;
  }
}
</style>