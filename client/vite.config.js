import { defineConfig } from "vite";

export default defineConfig({
  server: {
    host: "0.0.0.0",
    port: process.env.PORT || 5173,
    strictPort: true,
    allowedHosts: ["all"], // Allows all hosts
  },
  preview: {
    port: process.env.PORT || 4173,
    allowedHosts: ["all"], // Ensures preview mode works too
  }
});
