import { defineConfig } from "vite";
import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // No custom domain yet: served at norin-web.github.io/tclapp/.
  // When a domain is attached, switch to "/" AND add public/CNAME in the same commit.
  base: "/tclapp/",
  plugins: [react(), tailwindcss()],
  resolve: { alias: { "@": path.resolve(__dirname, "./src") } },
});
