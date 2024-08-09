  const withMT = require("@material-tailwind/react/utils/withMT");

  module.exports = {
    daisyui: {
      themes: ["light"],
    },
    content: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
      "node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
      "node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        backgroundImage: {
          "my-bg-gif": "url(../../public/assets/gif/bg-gif.gif)",
          "card-gif": "url(../../public/assets/gif/card-gif.gif)",
          "login-circle": "url(../../public/assets/bg-circle-login.jpg)",
        },
      },
    },
    plugins: [
      require('daisyui'),
      require('tailwindcss'),
      require('autoprefixer'),
    ],
  };
