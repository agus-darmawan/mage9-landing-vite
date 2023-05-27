module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4A3AFF",
      },
      backgroundImage: {
        Hero:  "url('assets/images/bg/Hero1-2.png')",
        Hero1: "url('assets/images/bg/Hero2-2.png')",
      },
    },
  },
  plugins: [],
};
