<template>
  <section class="bannerSection columnAlignCenter">
    <div class="bannerContainer columnAlignCenter">
      <Swiper :slides-per-view="1" :modules="[Navigation, Pagination, Autoplay]" :pagination="{ clickable: true }"
        :autoplay="{
          delay: 5000,
          disableOnInteraction: false
        }" :loop="true" :loop-additional-slides="2">
        <SwiperSlide v-for="(banner, index) in banners" :key="index">
          <picture>
            <source :srcset="`/images/banners/${banner.xl}.webp`" media="(min-width: 1200px)">
            <source :srcset="`/images/banners/${banner.l}.webp`" media="(min-width: 1080px)">
            <source :srcset="`/images/banners/${banner.m}.webp`" media="(min-width: 660px)">
            <source :srcset="`/images/banners/${banner.s}.webp`" media="(min-width: 480px)">
            <img :src="`/images/banners/${banner.xs}.webp`" :alt="banner.alt" class="bannerImage">
          </picture>
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
</script>

<script>
import { banners } from '~/shared/banners';

export default {
  data() {
    return {
      banners: banners
    }
  }
}
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


:deep(.swiper-pagination-bullet) {
  width: 6px;
  height: 6px;
  border: 1px solid var(--color-black);
  border-radius: 50%;
  background: transparent;
  opacity: 1;
}

:deep(.swiper-pagination-bullet-active) {
  background-color: var(--color-black);
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