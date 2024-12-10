<template>
  <footer class="bg-black">
    <div class="w-full column">
      <NuxtImg
        class="logo"
        src="/images/Logo-Empresa.svg"
        alt="Logo Infosystema"
      />
      <div>
        <ul class="column">
          <li v-for="(link, index) in menu" :key="index">
            <NuxtLink :to="link.to">{{ link.label }}</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
import { ROUTE_NAMES } from '~/constants/ROUTE_NAMES';

export default {
  data() {
    return {
      menu: [
        {
          label: "INICIO",
          to: ROUTE_NAMES.HOME,
        },
        {
          label: "PRODUCTOS",
          to: ROUTE_NAMES.PRODUCTOS,
        },
      ],
    };
  },
};
</script>

<style scoped>
  footer {
    padding: 1.25rem
  }

  footer > div {
    align-items: flex-start;
    gap: 1.25rem;
  }

  .logo {
    width: 3.125rem;
  }

  ul {
    gap: 0.625rem;
  }

  ul li a {
    text-decoration: none;
    color: var(--color-white);
    font-weight: 500;
  }
</style>