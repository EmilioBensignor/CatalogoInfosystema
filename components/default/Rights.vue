<template>
  <div class="bg-dark-gray">
    <p class="text-center">© We Glam 2024. Todos los derechos reservados.</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>

<style scoped>
  div {
    padding: 0.5rem;
  }

  @media (width >=1440px) {
    p {
      font-size: 1rem;
    }
  }
</style>