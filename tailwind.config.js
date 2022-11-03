module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        "almost-white": "hsl(0, 0%, 98%)",
        "medium-gray": "hsl(0, 0%, 41%)",
        "almost-black": "hsl(0, 0%, 8%)",
        "dzoma-blue-black":"#1F032C",
        "dzoma-yellow":"#F3C244",
        "dzoma-red":"#B13636"
      },
      backgroundImage: {
        'hero-background': "url('/images/hero/hero__background.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
    },
  },
  plugins: [],
};
