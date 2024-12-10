<template>
  <section class="columnAlignCenter">
    <h2>PRODUCTOS DESTACADOS</h2>
    <div class="productosContainer">
      <InfoProductCard :producto="producto" v-for="(producto, index) in productos" :key="index" />
    </div>
    <NuxtLink :to="routes.PRODUCTOS" class="primaryButton">Ver todos los productos</NuxtLink>
  </section>
</template>

<script>
import { ROUTE_NAMES } from '~/constants/ROUTE_NAMES';
import { productos } from '~/shared/productos';

export default {
  data() {
    return {
      routes: ROUTE_NAMES,
      productos,
    };
  },
};
</script>

<style scoped>
.productosContainer {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
}

@media (width >=380px) {
  .productosContainer {
    gap: 1.25rem;
  }
}
</style>
