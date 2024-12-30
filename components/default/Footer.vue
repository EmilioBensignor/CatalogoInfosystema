<template>
  <footer class="bg-black">
    <div class="w-full column">
      <NuxtImg class="logo" src="/images/Logo-Empresa.svg" alt="Logo Infosystema" />
      <div class="w-full rowSpaceBetween">
        <ul class="column">
          <li v-for="(link, index) in menu" :key="index">
            <NuxtLink :to="link.to">{{ link.label }}</NuxtLink>
          </li>
        </ul>
        <ul class="socialMedia column align-items-end">
          <li v-for="(media, index) in socialMedia" :key="index">
            <a :href="media.to" class="rowCenter" target="_blank">
              <p>{{ media.label }}</p>
              <Icon :name="media.icon" />
            </a>
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
          label: "Inicio",
          to: ROUTE_NAMES.HOME,
        },
        {
          label: "Productos",
          to: ROUTE_NAMES.PRODUCTOS,
        },
      ],
      socialMedia: [
        {
          label: "+54 9 11 2222 3333",
          to: "#",
          icon: "mingcute:whatsapp-line",
        },
        {
          label: "We Glam",
          to: "#",
          icon: "simple-icons:mercadopago",
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

footer>div {
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

.socialMedia li a {
  gap: 6px;
}

.mercadoLibre {
  width: 0.875rem;
  height: 0.875rem;
  background-image: url("/images/footer/mercado-libre-icon.svg");
}

@media (width >=660px) {
  footer {
    padding: 1.25rem 2.5rem;
  }
}
</style>