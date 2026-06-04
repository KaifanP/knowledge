import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = fileURLToPath(new URL(".", import.meta.url));

export default defineConfig(({ command }) => ({
  base: command === "build" ? "/knowledge/" : "/",
  plugins: [react()],
  build: {
    rollupOptions: {
      input: resolve(rootDir, "app.html")
    }
  },
  server: {
    fs: {
      allow: ["."]
    }
  }
}));
