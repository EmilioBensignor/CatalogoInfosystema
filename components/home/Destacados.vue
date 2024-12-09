<template>
  <section class="columnAlignCenter">
    <h2>PRODUCTOS DESTACADOS</h2>
    <div class="productosContainer">
      <article
        v-for="(producto, index) in productos"
        :key="index"
        class="producto bg-white shadow-3"
      >
        <NuxtImg class="w-full" :src="`/images/${producto.image}.png`" :alt="producto.title" />
        <h3>{{ producto.title }}</h3>
        <p>{{ producto.price }}</p>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      productos: [
        {
          image: "producto",
          title: "Producto 1",
          price: 100,
        },
        {
          image: "producto",
          title: "Producto 1",
          price: 100,
        },
        {
          image: "producto",
          title: "Producto 1",
          price: 100,
        },
        {
          image: "producto",
          title: "Producto 1",
          price: 100,
        },
        {
          image: "producto",
          title: "Producto 1",
          price: 100,
        },
        {
          image: "producto",
          title: "Producto 1",
          price: 100,
        },
        {
          image: "producto",
          title: "Producto 1",
          price: 100,
        },
        {
          image: "producto",
          title: "Producto 1",
          price: 100,
        },
        {
          image: "producto",
          title: "Producto 1",
          price: 100,
        },
        {
          image: "producto",
          title: "Producto 1",
          price: 100,
        },
      ],
    };
  },
};
</script>

<style scoped>
.productosContainer {
  display: flex;
  flex-wrap: wrap;
  gap: 1.25rem;
}

.producto {
  width: 46%;
  border-radius: 7px;
  padding: 0.625rem;
}
</style>
