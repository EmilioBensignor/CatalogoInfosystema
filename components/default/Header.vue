<template>
  <header class="bg-black rowCenter justify-content-center relative">
    <button
      class="hamburger"
      @click="toggleDrawer"
      aria-label="Open or close menu">
      <Icon size="1.5rem" name="mingcute:menu-line" />
    </button>
    <NuxtLink :to="routes.HOME">
      <NuxtImg class="logo" src="/images/Logo-Empresa.svg" alt="Logo Infosystema" />
    </NuxtLink>
    <div class="menuSidebar">
      <Drawer
        :visible="drawerMenu"
        :modal="true"
        :dismissable="true"
        :closeOnEscape="true"
        class="column"
        @hide="closeDrawer">
        <template #header>
          <button @click="closeDrawer" class="closeButton allCenter">
            <Icon name="mingcute:close-line" class="text-white" />
          </button>
        </template>
        <nav class="w-full h-full navMenu columnSpaceBetween">
          <InfoMenu :menu="menu" />
        </nav>
      </Drawer>
    </div>
  </header>
</template>

<script>
  import { ROUTE_NAMES } from "~/constants/ROUTE_NAMES";
  export default {
    data() {
      return {
        drawerMenu: false,
        routes: ROUTE_NAMES,
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
    mounted() {
      document.addEventListener("click", this.handleOutsideClick);
      document.addEventListener("keydown", this.handleKeyDown);
    },
    beforeUnmount() {
      document.removeEventListener("click", this.handleOutsideClick);
      document.removeEventListener("keydown", this.handleKeyDown);
    },
    methods: {
      toggleDrawer() {
        this.drawerMenu = !this.drawerMenu;
      },
      closeDrawer() {
        this.drawerMenu = false;
      },
      handleKeyDown(event) {
        if (event.key === "Escape" && this.drawerMenu) {
          this.closeDrawer();
        }
      },
      handleOutsideClick(event) {
        const drawer = document.querySelector(".p-drawer");
        const hamburger = document.querySelector(".hamburger");
        if (
          this.drawerMenu &&
          drawer &&
          !drawer.contains(event.target) &&
          event.target !== hamburger &&
          !hamburger.contains(event.target)
        ) {
          this.closeDrawer();
        }
      },
    },
  };
</script>

<style>
  .p-drawer {
    width: 55% !important;
    gap: 1.25rem;
    background: var(--color-black) !important;
    padding: 1.25rem !important;
  }

  .p-drawer-header {
    display: flex;
    justify-content: flex-start !important;
  }

  .p-drawer-header .p-icon {
    display: none;
  }

  .navMenu .p-panelmenu {
    gap: 0.625rem;
  }

  .navMenu .p-panelmenu-header {
    cursor: pointer;
  }

  .navMenu a {
    color: var(--color-white);
    font-weight: 700;
    font-size: 1rem;
    text-decoration: none;
  }

  .navMenu .p-panelmenu-submenu .p-panelmenu-item {
    border-top: 1px solid #0b4f6c99;
    padding: 0.875rem 3rem;
  }

  .navMenu .p-panelmenu-item-content a {
    font-weight: 500;
    font-size: 1rem;
  }

  .navMenu .p-panelmenu-item-content a span:first-of-type {
    display: none;
  }

  .closeButton {
    background: none;
    border: none;
    cursor: pointer;
    color: var(--color-mid-dark-blue);
  }

  .closeButton span {
    font-size: 1.5rem !important;
  }
</style>

<style scoped>
  header {
    padding: 1.25rem;
  }

  .hamburger {
    position: absolute;
    left: 1.25rem;
    background: none;
    border: none;
    color: var(--color-white);
    cursor: pointer;
  }

  .logo {
    width: 5.625rem;
    align-self: center;
  }
</style>
