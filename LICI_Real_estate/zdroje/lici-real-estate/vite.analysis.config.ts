// Iba pre lokálnu analýzu: proxy na Lovable assety (/__l5e/...), ktoré lokálne neexistujú.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  vite: {
    server: {
      proxy: {
        "/__l5e": {
          target: "https://afd7fe19-b497-43f1-a32f-98954d11cc80.lovableproject.com",
          changeOrigin: true,
          secure: true,
        },
      },
    },
  },
});
