/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainColor: "#1C2536",
        lightColor: "#e9d9c5",
        mainGold: "#C5A363",
      },
    },
  },
  plugins: [],
});
