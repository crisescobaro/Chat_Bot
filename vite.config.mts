import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@Pages": "/src/pages/",
      "@Routes": "/src/routes/",
      "@Assets": "/src/assets/",
      "@Components": "/src/components/",
      "@Charts": "/src/Chartjs/",
    },
  },
});
