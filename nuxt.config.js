export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "server",

  serverMiddleware: [
    { path: "/serverMiddleware", handler: "~/serverMiddleware/index.js" }, // Adjust the path based on where you place your middleware file
  ],
  publicRuntimeConfig: {
    middlewareUrl:
      process.env.NODE_ENV === "production"
        ? "https://trendset.vercel.app"
        : "http://localhost:3000/",
  },
  router: {
    middleware: [],
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "trendseter",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700;800&display=swap",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/css/style.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["~/plugins/axios.client.js"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Montserrat: [400, 500, 700, 800],
        },
      },
    ],
    "@nuxtjs/axios",
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: { transpile: [({ isLegacy }) => isLegacy && "axios"] },

  axios: {
    proxy: true,
    baseURL: "https://trendset.vercel.app",
  },
  proxy: {
    "/api/": {
      target: process.env.BASE_URL || "https://trendset.vercel.app",
      pathRewrite: { "^/api/": "" },
    },
  },
  server: {
    host: process.env.HOST || "0.0.0.0",
  },
};
