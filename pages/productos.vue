<template>
  <main>
    <section class="columnAlignCenter">
      <h1 class="text-center">Nuestros Productos</h1>
      <div class="productosContainer">
        <InfoProductCard :producto="producto" v-for="(producto, index) in productos" :key="index" />
      </div>
    </section>
  </main>
</template>

<script>
import { productos } from '~/shared/productos';

export default {
  data() {
    return {
      productos,
    };
  },
}
</script>

<style scoped>
@media (width >=660px) {
  h1 {
    width: 100%;
    text-align: start !important;
  }
}
</style>