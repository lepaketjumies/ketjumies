import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "./eportfoliot/lennikamalainen",
  plugins: [react()],
});
