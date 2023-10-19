/** @type {import('tailwindcss').Config} */
export default {
  // darkMode: 'class',

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   darkMode: 'class',
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [require("daisyui")],
//   // ...
// }
// // tailwind.config.js

// module.exports = {
//   purge: [],
//   darkMode: 'class', // Set darkMode to 'class' to enable dark mode via class
//   theme: {
//     extend: {},
//   },
//   variants: {},
//   plugins: [
//     require('@tailwindcss/forms'),
//     // Add the following lines for dark mode
//     require('tailwindcss-dark-mode')(), // Use this plugin to generate dark mode classes
//     [require("daisyui")]
//   ],
// };
