module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Include all files in the `app` directory
    "./components/**/*.{js,ts,jsx,tsx}", // Include all files in the `components` directory
    "./sections/**/*.{js,ts,jsx,tsx}", // Include all files in the `sections` directory
    "./globals.css",
  ],
  theme: {
    extend: {
      screens: {
        sm: "321px", // Change sm to 600px
      },
    },
  },
  plugins: [],
};
