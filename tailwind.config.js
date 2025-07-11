export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#009f1d", // Your existing custom blue-gray
        portalGreen: "#00FF41", // Neon green like Rick’s portal
        rickBlue: "#B2DFFC", // Pale blue for Rick’s hair
        mortyYellow: "#F2C94C", // Mustard yellow for Morty’s shirt
        alienPurple: "#7B2FF7", // Purple glow
        darkBackground: "#0F172A", // Dark navy/gray background
      },
    },
  },
  plugins: [],
};
