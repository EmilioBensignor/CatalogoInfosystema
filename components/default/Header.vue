<template>
  <header class="bg-black">
    <div class="rowCenter justify-content-center relative">
      <button class="hamburger" @click="toggleDrawer" aria-label="Open or close menu">
        <Icon size="1.5rem" name="mingcute:menu-line" />
      </button>
      <NuxtLink :to="routes.HOME">
        <NuxtImg class="logo" src="/images/Logo-Empresa.svg" alt="Logo Infosystema" />
      </NuxtLink>
      <div class="menuSidebar">
        <Drawer :visible="drawerMenu" :modal="true" :dismissable="true" :closeOnEscape="true" class="column"
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
          label: "Inicio",
          to: ROUTE_NAMES.HOME,
        },
        {
          label: "Productos",
          to: ROUTE_NAMES.PRODUCTOS,
        },
      ],
    };
  },
  watch: {
    $route() {
      this.closeDrawer();
    }
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
  width: 10rem !important;
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
  font-size: 1.25rem;
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

@media (width >=660px) {
  .p-drawer {
    width: 12rem !important;
  }

  .navMenu a {
    font-size: 1.5rem;
  }
}
</style>

<style scoped>
header {
  position: sticky;
  top: 0;
  z-index: 10;
  padding: 1.25rem;
}

.hamburger {
  position: absolute;
  left: 0;
  background: none;
  border: none;
  color: var(--color-white);
  cursor: pointer;
}

.logo {
  width: 5.625rem;
}

@media (width >=660px) {
  header {
    padding: 1.25rem 2.5rem;
  }

  .logo {
    width: 6.75rem;
  }
}

@media (width >=1080px) {
  header {
    padding: 1.25rem 3.75rem;
  }

  .logo {
    width: 7.25rem;
  }
}
</style>
