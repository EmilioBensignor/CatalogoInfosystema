<template>
  <article class="producto columnAlignCenter bg-white shadow-3" @click="$emit('showDetail', producto)">
    <NuxtImg class="w-full" :src="producto.imagen" :alt="producto.titulo" />
    <p class="w-full">{{ producto.titulo }}</p>
    <div class="w-full rowSpaceBetween align-items-end">
      <p class="font-bold">
        ${{ calculatePrice(producto.costo_dolar).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") }}
      </p>
      <p class="font-bold text-gray"><sup>+</sup>IVA</p>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    producto: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      store: useVariablesStore(),
    }
  },
  methods: {
    calculatePrice(dolarCost) {
      return Math.round(dolarCost * this.store.DOLAR_WG * this.store.GANANCIA)
    }
  },
}
</script>

<style scoped>
.producto {
  width: 46.5%;
  max-width: 175px;
  justify-content: space-between;
  gap: 0.625rem;
  border-radius: 7px;
  padding: 0.625rem;
  cursor: pointer;
}

.producto>img {
  max-width: 150px;
}

.producto>p {
  font-size: 0.875rem;
}

.producto>div p {
  font-size: 1rem;
}

.producto>div p:last-of-type {
  font-size: 0.75rem;
}

@media (width >=350px) {
  .producto>div p:last-of-type {
    font-size: 0.875rem;
  }
}

@media (width >=380px) {
  .producto>div p:last-of-type {
    font-size: 1rem;
  }
}

@media (width >=660px) {
  .producto {
    width: 31%;
    max-width: 200px;
    padding: 1.25rem;
  }

  .producto>div p,
  .producto>div p:last-of-type {
    font-size: 1.25rem;
  }

  .producto>p {
    font-size: 1rem
  }
}

@media (width >=1080px) {
  .producto {
    width: 23.25%;
    max-width: 225px;
  }

  .producto>img {
    max-width: 170px;
  }

  .producto>div p,
  .producto>div p:last-of-type {
    font-size: 1.5rem;
  }
}

@media (width >=1440px) {
  .producto {
    width: 25%;
    max-width: 235px;
  }

  .producto>p {
    font-size: 1.25rem;
  }
}
</style>
