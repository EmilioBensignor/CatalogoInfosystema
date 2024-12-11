<template>
  <main>
    <section class="columnAlignCenter">
      <h1 class="text-center">NUESTROS PRODUCTOS</h1>
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