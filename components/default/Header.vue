<template>
  <header class="bg-black">
    <div class="column justify-content-center relative">
      <div class="rowCenter justify-content-center">
        <button class="hamburger" @click="toggleDrawer" aria-label="Open or close menu">
          <Icon size="1.5rem" name="mingcute:menu-line" />
        </button>
        <NuxtLink :to="routes.HOME">
          <NuxtImg class="logo" src="/images/Logo-We-Glam.svg" alt="Logo Infosystema" />
        </NuxtLink>
      </div>
      <div class="w-full searchContainer">
        <div class="w-full searchBox">
          <input type="text" id="buscador" placeholder="Buscar productos..." v-model="searchQuery" @input="handleSearch"
            @keyup.enter="handleSearch">
          <Icon name="mingcute:search-line" class="searchIcon" />
        </div>
      </div>
      <Drawer :visible="drawerMenu" :modal="true" :dismissable="true" :closeOnEscape="true" class="column"
        @hide="closeDrawer">
        <template #header>
          <button @click="closeDrawer" class="closeButton allCenter">
            <Icon name="mingcute:close-line" class="text-white" />
          </button>
        </template>
        <nav class="w-full navMenu column">
          <InfoMenu :menu="menu" />
          <MenuCategories :categories="store.getCategorias" />
        </nav>
      </Drawer>
      <nav class="desktopNav">
        <ul>
          <li v-for="item in menu" :key="item.label">
            <NuxtLink :to="item.to" class="text-white no-underline">{{ item.label }}</NuxtLink>
          </li>
          <li>
            <button @click="isCategoriesOpen = !isCategoriesOpen" class="categoriesButton rowSpaceBetweenCenter">
              <span>Categorías</span>
              <Icon :class="isCategoriesOpen ? 'rotatedIcon' : ''" name="mingcute:down-line" />
            </button>
          </li>
        </ul>
      </nav>
    </div>
    <p class="bh">BH</p>
    <div class="dropdownContent" :class="isCategoriesOpen ? 'open' : ''">
      <ul class="column">
        <li v-for="categoria in store.getCategorias" :key="categoria.id">
          <NuxtLink :to="`/categorias/${categoria.slug}`" class="no-underline">{{ categoria.nombre }}</NuxtLink>
        </li>
      </ul>
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
      store: useCategoriasStore(),
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
      isCategoriesOpen: false,
      searchQuery: '',
    };
  },
  watch: {
    $route() {
      this.closeDrawer();
    }
  },
  async mounted() {
    await this.store.fetchCategorias();
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
    handleSearch() {
      this.$router.push({
        path: this.routes.BUSQUEDA,
        query: { q: this.searchQuery.trim() }
      })
    }
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

.navMenu,
.navMenu .p-panelmenu,
.categoriesDropdown,
.dropdownContent ul {
  gap: 0.625rem;
}

.navMenu .p-panelmenu-panel {
  border: none;
}

.navMenu .p-panelmenu-header {
  cursor: pointer;
}

.navMenu a,
.categoriesButton {
  color: var(--color-white);
  font-weight: 700;
  font-size: 1.25rem;
  text-decoration: none;
}

.categoriesButton {
  width: 100%;
  background: none;
  border: none;
  cursor: pointer;
}

.categoriesButton span:last-of-type {
  font-size: 1.25rem !important;
  transition: all 0.5s;
}

.rotatedIcon {
  transform: rotate(180deg);
}

.dropdownContent {
  height: 0;
  interpolate-size: allow-keywords;
  overflow: hidden;
  transition: all 0.5s;
}

.dropdownContent a {
  font-weight: 500;
  color: var(--color-white);
  font-size: 0.875rem;
}

.dropdownContent.open {
  height: auto;
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

  .navMenu a,
  .categoriesButton {
    font-size: 1.5rem;
  }

  .dropdownContent a {
    font-size: 1rem;
  }

  .categoriesButton span:last-of-type {
    font-size: 1.5rem !important;
  }
}
</style>

<style scoped>
header {
  position: sticky;
  top: 3.75rem;
  z-index: 10;
  padding: 1.25rem;
}

header>div {
  position: relative;
  gap: 1.25rem;
}

.bh {
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  font-size: 0.5rem;
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
  width: 3rem;
}

.desktopNav {
  display: none;
}

.searchBox {
  max-width: 280px;
  position: relative;
  margin: 0 auto;
}

.searchBox input {
  width: 100%;
  padding: 0.5rem 1rem 0.5rem 2.25rem;
  border-radius: 999px;
  border: none;
  background-color: #fff;
  font-size: 0.75rem;
}

.searchBox input::placeholder {
  font-size: 0.75rem;
}

.searchBox input:focus-visible {
  outline: none;
}

.searchIcon {
  position: absolute;
  left: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  color: var(--color-dark-gray);
}

@media (width >=461px) {
  header {
    top: 2.375rem;
  }
}

@media (width >=660px) {
  header {
    top: 2.563rem;
    padding: 1.25rem 2.5rem;
  }

  .bh {
    font-size: 0.625rem;
  }

  .logo {
    width: 6.75rem;
  }

  .searchBox input,
  .searchBox input::placeholder {
    font-size: 0.875rem;
  }
}

@media (width >=1080px) {
  header {
    top: 2.875rem;
    padding: 1.25rem 3.75rem;
  }

  .bh {
    font-size: 0.75rem;
  }

  header>div {
    justify-content: space-between !important;
    flex-direction: row;
    gap: 3.75rem;
  }

  .logo {
    width: 7.25rem;
  }

  .desktopNav {
    display: block;
  }

  .desktopNav ul {
    display: flex;
    align-items: center;
    gap: 2.5rem;
  }

  .categoriesButton {
    gap: 0.625rem;
    font-size: 1.25rem;
    font-weight: 400;
  }

  .dropdownContent.open {
    padding-top: 1.25rem;
  }

  .dropdownContent ul {
    width: 100%;
    justify-content: center;
    flex-direction: row;
    gap: 2.5rem;
  }

  .dropdownContent ul li a {
    font-size: 1.25rem;
    border-right: 1px solid var(--color-white);
    padding-right: 2.5rem;
  }

  .dropdownContent ul li:last-of-type a {
    border-right: none;
    padding-right: 0;
  }

  .searchBox {
    max-width: 400px;
    margin: 0;
  }

  .searchBox input,
  .searchBox input::placeholder {
    font-size: 1rem;
  }
}

@media (width >=1440px) {
  header {
    top: 3.25rem;
  }

  .bh {
    top: 1rem;
    right: 1rem;
  }

  .categoriesButton,
  .dropdownContent ul li a {
    font-size: 1.5rem;
  }
}
</style>
