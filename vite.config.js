import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true,
  },
  server: {
    host: "0.0.0.0", // Allows access from any network device
    port: 5173, // Change the port if needed
    allowedHosts: ["ef34-210-156-40-78.ngrok-free.app"], // for testing on ngrok
  },
});
