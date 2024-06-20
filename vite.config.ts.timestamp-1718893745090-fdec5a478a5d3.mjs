// vite.config.ts
import path from "node:path";
import { defineConfig } from "file:///D:/Self-learn/project/GuillBot/node_modules/.pnpm/vite@5.1.4_sass@1.71.1/node_modules/vite/dist/node/index.js";
import Vue from "file:///D:/Self-learn/project/GuillBot/node_modules/.pnpm/@vitejs+plugin-vue@5.0.4_vite@5.1.4_vue@3.4.20/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import VueJsx from "file:///D:/Self-learn/project/GuillBot/node_modules/.pnpm/@vitejs+plugin-vue-jsx@3.1.0_vite@5.1.4_vue@3.4.20/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
import Pages from "file:///D:/Self-learn/project/GuillBot/node_modules/.pnpm/vite-plugin-pages@0.32.0_@vue+compiler-sfc@3.4.20_vite@5.1.4/node_modules/vite-plugin-pages/dist/index.js";
import Layouts from "file:///D:/Self-learn/project/GuillBot/node_modules/.pnpm/vite-plugin-vue-layouts@0.11.0_vite@5.1.4_vue-router@4.3.0_vue@3.4.20/node_modules/vite-plugin-vue-layouts/dist/index.mjs";
import AutoImport from "file:///D:/Self-learn/project/GuillBot/node_modules/.pnpm/unplugin-auto-import@0.17.5/node_modules/unplugin-auto-import/dist/vite.js";
import Components from "file:///D:/Self-learn/project/GuillBot/node_modules/.pnpm/unplugin-vue-components@0.26.0_vue@3.4.20/node_modules/unplugin-vue-components/dist/vite.js";
import { ElementPlusResolver } from "file:///D:/Self-learn/project/GuillBot/node_modules/.pnpm/unplugin-vue-components@0.26.0_vue@3.4.20/node_modules/unplugin-vue-components/dist/resolvers.js";
var __vite_injected_original_dirname = "D:\\Self-learn\\project\\GuillBot";
var vite_config_default = defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "src")
    }
  },
  plugins: [
    Vue(),
    VueJsx(),
    Layouts({
      layoutsDirs: "./src/layouts",
      pagesDirs: "./src/pages",
      defaultLayout: "default"
    }),
    Pages({
      dirs: "./src/pages"
    }),
    AutoImport({
      imports: [
        "vue",
        "vue-router"
      ],
      resolvers: [
        ElementPlusResolver()
      ]
    }),
    Components({
      resolvers: [
        ElementPlusResolver()
      ]
    })
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxTZWxmLWxlYXJuXFxcXHByb2plY3RcXFxcR3VpbGxCb3RcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXFNlbGYtbGVhcm5cXFxccHJvamVjdFxcXFxHdWlsbEJvdFxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovU2VsZi1sZWFybi9wcm9qZWN0L0d1aWxsQm90L3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHBhdGggZnJvbSAnbm9kZTpwYXRoJ1xyXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xyXG5cclxuaW1wb3J0IFZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnXHJcbmltcG9ydCBWdWVKc3ggZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlLWpzeCdcclxuaW1wb3J0IFBhZ2VzIGZyb20gJ3ZpdGUtcGx1Z2luLXBhZ2VzJ1xyXG5pbXBvcnQgTGF5b3V0cyBmcm9tICd2aXRlLXBsdWdpbi12dWUtbGF5b3V0cydcclxuaW1wb3J0IEF1dG9JbXBvcnQgZnJvbSAndW5wbHVnaW4tYXV0by1pbXBvcnQvdml0ZSdcclxuaW1wb3J0IENvbXBvbmVudHMgZnJvbSAndW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvdml0ZSdcclxuaW1wb3J0IHsgRWxlbWVudFBsdXNSZXNvbHZlciB9IGZyb20gJ3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3Jlc29sdmVycydcclxuXHJcbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgcmVzb2x2ZToge1xyXG4gICAgYWxpYXM6IHtcclxuICAgICAgJ0AnOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnc3JjJyksXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgcGx1Z2luczogW1xyXG4gICAgVnVlKCksXHJcbiAgICBWdWVKc3goKSxcclxuICAgIExheW91dHMoe1xyXG4gICAgICBsYXlvdXRzRGlyczogJy4vc3JjL2xheW91dHMnLFxyXG4gICAgICBwYWdlc0RpcnM6ICcuL3NyYy9wYWdlcycsXHJcbiAgICAgIGRlZmF1bHRMYXlvdXQ6ICdkZWZhdWx0JyxcclxuICAgIH0pLFxyXG4gICAgUGFnZXMoe1xyXG4gICAgICBkaXJzOiAnLi9zcmMvcGFnZXMnLFxyXG4gICAgfSksXHJcbiAgICBBdXRvSW1wb3J0KHtcclxuICAgICAgaW1wb3J0czogW1xyXG4gICAgICAgICd2dWUnLFxyXG4gICAgICAgICd2dWUtcm91dGVyJyxcclxuICAgICAgXSxcclxuICAgICAgcmVzb2x2ZXJzOiBbXHJcbiAgICAgICAgRWxlbWVudFBsdXNSZXNvbHZlcigpLFxyXG4gICAgICBdLFxyXG4gICAgfSksXHJcbiAgICBDb21wb25lbnRzKHtcclxuICAgICAgcmVzb2x2ZXJzOiBbXHJcbiAgICAgICAgRWxlbWVudFBsdXNSZXNvbHZlcigpLFxyXG4gICAgICBdLFxyXG4gICAgICBcclxuICAgIH0pLFxyXG4gIF0sXHJcbn0pXHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBb1IsT0FBTyxVQUFVO0FBQ3JTLFNBQVMsb0JBQW9CO0FBRTdCLE9BQU8sU0FBUztBQUNoQixPQUFPLFlBQVk7QUFDbkIsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sYUFBYTtBQUNwQixPQUFPLGdCQUFnQjtBQUN2QixPQUFPLGdCQUFnQjtBQUN2QixTQUFTLDJCQUEyQjtBQVRwQyxJQUFNLG1DQUFtQztBQVl6QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLEtBQUssUUFBUSxrQ0FBVyxLQUFLO0FBQUEsSUFDcEM7QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxJQUFJO0FBQUEsSUFDSixPQUFPO0FBQUEsSUFDUCxRQUFRO0FBQUEsTUFDTixhQUFhO0FBQUEsTUFDYixXQUFXO0FBQUEsTUFDWCxlQUFlO0FBQUEsSUFDakIsQ0FBQztBQUFBLElBQ0QsTUFBTTtBQUFBLE1BQ0osTUFBTTtBQUFBLElBQ1IsQ0FBQztBQUFBLElBQ0QsV0FBVztBQUFBLE1BQ1QsU0FBUztBQUFBLFFBQ1A7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0EsV0FBVztBQUFBLFFBQ1Qsb0JBQW9CO0FBQUEsTUFDdEI7QUFBQSxJQUNGLENBQUM7QUFBQSxJQUNELFdBQVc7QUFBQSxNQUNULFdBQVc7QUFBQSxRQUNULG9CQUFvQjtBQUFBLE1BQ3RCO0FBQUEsSUFFRixDQUFDO0FBQUEsRUFDSDtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
