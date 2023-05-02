module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero: "linear-gradient(to right, rgba(47, 48, 58, 0.75),rgba(47, 48, 58, 0.8)), url('./../image/hero.jpg')",
        heroUser:
          "linear-gradient(to right, rgba(47, 48, 58, 0.75),rgba(47, 48, 58, 0.8)), url('./../image/hero-user.jpg')",
        news: "url('./../image/theme/news.jpg')",
        hobbies: "url('./../image/theme/hobbies.jpg')",
        sport: "url('./../image/theme/sport.jpg')",
        people: "url('./../image/theme/people.jpg')",
        other: "url('./../image/theme/other.jpg')",
        nothing: "url('./../image/theme/nothing.jpg')",
        error404: "url('./../image/error404.jpg')",
      },
      dropShadow: {
        "3xl": "0 35px 35px rgba(0, 0, 0, 0.25)",
        "4xl": [
          "0 35px 35px rgba(0, 0, 0, 0.25)",
          "0 45px 65px rgba(0, 0, 0, 0.15)",
        ],
        custom:
          "1px 4px 6px rgba(0, 0, 0, 0.16), 0px 4px 4px rgba(0, 0, 0, 0.06), 0px 1px 1px rgba(0, 0, 0, 0.12)",
      },
    },
  },
  plugins: [],
};
