import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/eportfoliot/", // absolute base for assets when deployed under /eportfoliot/
  plugins: [react()],
});
