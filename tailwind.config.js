/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./__src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        Inter_400Regular: "Inter_400Regular",
        Inter_500Medium: "Inter_500Medium",
        Inter_600SemiBold: "Inter_600SemiBold",
        Inter_700Bold: "Inter_700Bold",
      },
    },
    container: {
      center: true,
      padding: "16px",
    },
  },
  plugins: [],
};
