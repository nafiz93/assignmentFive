/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}", // covers React/Vite
        "./components/**/*.{js,ts,jsx,tsx}", // optional if you have a components folder
    ],
    theme: {
        extend: {
            colors: {
                primary: "#0ea5e9", // customize as needed
                secondary: "#9333ea",
            },
            fontFamily: {
                sans: ["Inter", "ui-sans-serif", "system-ui"],
            },
        },
    },
    plugins: [],
};
