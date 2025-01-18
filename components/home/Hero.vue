<template>
  <section class="bannerSection columnAlignCenter">
    <div class="bannerContainer columnAlignCenter">
      <Swiper :slides-per-view="1" :modules="[Navigation, Pagination, Autoplay]" :pagination="{ clickable: true }"
        :autoplay="{
          delay: 3000,
          disableOnInteraction: false
        }" :loop="true" :loop-additional-slides="2">
        <SwiperSlide v-for="banner in banners" :key="banner.title">
          <div class="slideContent">
            <div class="title">
              <h1>{{ banner.title }}</h1>
            </div>
            <img :src="`/images/banner-hero.png`" :alt="banner.alt" class="bannerImage" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const banners = ref([
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
])
</script>

<style scoped>
.bannerSection {
  max-width: 100vw;
  background: var(--gradient-black);
  overflow: hidden;
}

.bannerContainer {
  width: 100%;
}

.slideContent {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding: 3.5rem 0;
}

.bannerImage {
  width: 75%;
  max-width: 280px;
  height: auto;
  object-fit: contain;
}

.title {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--color-white);
  border-radius: 999px;
  padding: 0.25rem 1.25rem;
  z-index: 1;
}

/* Estilos para la paginación */
:deep(.swiper-pagination-bullet) {
  width: 6px;
  height: 6px;
  border: 1px solid var(--color-white);
  border-radius: 50%;
  background: transparent;
  opacity: 1;
}

:deep(.swiper-pagination-bullet-active) {
  background-color: var(--color-white);
}

/* Media queries */
@media (min-width: 660px) {
  .slideContent {
    padding: 4rem 0;
  }

  .title {
    padding: 0.25rem 1.75rem;
  }
}

@media (min-width: 1080px) {
  .slideContent {
    padding: 6rem 0 4rem 0;
  }

  .title {
    padding: 0.25rem 2.5rem;
  }

  .bannerImage {
    width: 80%;
    max-width: 300px;
  }
}

:deep(.swiper) {
  width: 100%;
  height: 100%;
}

:deep(.swiper-slide) {
  display: flex;
  justify-content: center;
  align-items: center;
}

:deep(.swiper-pagination) {
  bottom: 1.25rem !important;
}
</style>