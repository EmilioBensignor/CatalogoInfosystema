<template>
  <footer class="bg-black">
    <div class="w-full column">
      <NuxtImg class="logo" src="/images/Logo-We-Glam.svg" alt="Logo We Glam" />
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
              <Icon :name="`mingcute:${media.icon}`" />
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
          label: "+54 9 11 5637 0523",
          to: "https://wa.me/+5491156370523/?text=¡Hola! Estoy en el catálogo de We Glam Importadores y quiero pedir más información.",
          icon: "whatsapp-line",
        },
        {
          label: "We Glam - Ubicación",
          to: "https://maps.app.goo.gl/itCtFp6wpwuaCerBA",
          icon: "location-line",
        },
        {
          label: "Lunes a Viernes - 10 a 16hs",
          to: "https://maps.app.goo.gl/itCtFp6wpwuaCerBA",
          icon: "alarm-2-line",
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

@media (width >=1080px) {
  footer {
    padding: 1.25rem 3.75rem;
  }

  .logo {
    width: 4.25rem;
  }

  .socialMedia li a p {
    font-size: 1.25rem;
  }

  .socialMedia li a span {
    font-size: 1.5rem !important;
  }
}
</style>