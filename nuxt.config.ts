// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ["~/assets/main.css"],
  modules: [
    "@primevue/nuxt-module",
    "@nuxt/image",
    "@nuxt/icon",
    "@nuxtjs/seo",
    "nuxt-vitalizer",
    'nuxt-booster',
    '@nuxtjs/fontaine',
    'nuxt-anchorscroll',
    '@nuxt/scripts',
    'nuxt-swiper',
    '@nuxtjs/supabase',
    '@pinia/nuxt'
  ],
  supabase: {
    redirect: false,
  },
  icon: {
    size: '1rem',
    serverBundle: {
      collections: ['mingcute', 'simple-icons']
    }
  },
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://unpkg.com/primeflex@latest/primeflex.css'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Host+Grotesk:ital,wght@0,300..800;1,300..800&family=Outfit:wght@100..900&display=swap'
        },
      ],
    }
  },
  site: {
    url: 'https://www.weglam.com.ar',
    name: 'We Glam Importadores',
    description: 'We Glam Importadores y distribuidores. Productos para el hogar, bazar, deco',
    defaultLocale: 'es',
  },
  booster: {
    detection: {
      performance: true,
      browserSupport: true,
      battery: true
    },
    performanceMetrics: {
      timing: {
        fcp: 800,
        dcl: 1200
      }
    },
    lazyOffset: {
      component: '0%',
      asset: '0%'
    }
  },
  image: {
    screens: {
      default: 320,
      xxs: 480,
      xs: 576,
      sm: 768,
      md: 996,
      lg: 1200,
      xl: 1367,
      xxl: 1600,
      '4k': 1921
    },
    domains: ['img.youtube.com', 'i.vimeocdn.com'],
    alias: {
      youtube: 'https://img.youtube.com',
      vimeo: 'https://i.vimeocdn.com',
    }
  },
  vitalizer: {
    disableStylesheets: 'entry',
    disablePrefetchLinks: true
  },
  imports: {
    dirs: ['store']
  },
})