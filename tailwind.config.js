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
        lg: "1440px", // Large screens (≥1440px)
        md: "768px", // Medium screens (≥768px)
        sm: "375px", // Small screens (≥375px)
      },
      fontSize: {
        "dynamic-h1": "61.04px",
        "dynamic-h2": "48.83px",
        "dynamic-h3": "39.06px",
        "dynamic-h4": "31.25px",
        "dynamic-h5": "25px",
        "dynamic-h6": "20px",
        "dynamic-h7": "16px",
        "dynamic-h8": "12.8px",
        "dynamic-h9": "10px",
      },
      lineHeight: {
        "dynamic-sm": "1.2",
        "dynamic-md": "1.3",
        "dynamic-lg": "1.5",
      },
    },
  },
  plugins: [],
};
