// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Hello, World!",
      meta: [
        {
          name: "description",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean molestie nisl ac vestibulum posuere. Etiam pulvinar turpis ac lectus placerat.",
        },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.png" }
      ]
    }
  },
  css: ["~/assets/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["@nuxt/content"],
});
