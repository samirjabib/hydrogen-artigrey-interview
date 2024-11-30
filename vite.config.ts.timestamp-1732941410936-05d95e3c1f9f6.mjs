// vite.config.ts
import { defineConfig } from "file:///C:/Users/MONEY/Desktop/code/hydrogen-artigrey-interview/node_modules/vite/dist/node/index.js";
import { hydrogen } from "file:///C:/Users/MONEY/Desktop/code/hydrogen-artigrey-interview/node_modules/@shopify/hydrogen/dist/vite/plugin.js";
import { netlifyPlugin } from "file:///C:/Users/MONEY/Desktop/code/hydrogen-artigrey-interview/node_modules/@netlify/remix-edge-adapter/dist/vite/plugin.mjs";
import { vitePlugin as remix } from "file:///C:/Users/MONEY/Desktop/code/hydrogen-artigrey-interview/node_modules/@remix-run/dev/dist/index.js";
import tsconfigPaths from "file:///C:/Users/MONEY/Desktop/code/hydrogen-artigrey-interview/node_modules/vite-tsconfig-paths/dist/index.js";
import path from "path";
var __vite_injected_original_dirname = "C:\\Users\\MONEY\\Desktop\\code\\hydrogen-artigrey-interview";
var vite_config_default = defineConfig({
  plugins: [
    hydrogen(),
    remix({
      presets: [hydrogen.preset()],
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true
      }
    }),
    netlifyPlugin(),
    tsconfigPaths()
  ],
  resolve: {
    alias: {
      "~": path.resolve(__vite_injected_original_dirname, "app")
    }
  },
  build: {
    // Allow a strict Content-Security-Policy
    // withtout inlining assets as base64:
    assetsInlineLimit: 0
  },
  ssr: {
    optimizeDeps: {
      /**
       * Include dependencies here if they throw CJS<>ESM errors.
       * For example, for the following error:
       *
       * > ReferenceError: module is not defined
       * >   at /Users/.../node_modules/example-dep/index.js:1:1
       *
       * Include 'example-dep' in the array below.
       * @see https://vitejs.dev/config/dep-optimization-options
       */
      include: []
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxNT05FWVxcXFxEZXNrdG9wXFxcXGNvZGVcXFxcaHlkcm9nZW4tYXJ0aWdyZXktaW50ZXJ2aWV3XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxNT05FWVxcXFxEZXNrdG9wXFxcXGNvZGVcXFxcaHlkcm9nZW4tYXJ0aWdyZXktaW50ZXJ2aWV3XFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9NT05FWS9EZXNrdG9wL2NvZGUvaHlkcm9nZW4tYXJ0aWdyZXktaW50ZXJ2aWV3L3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XHJcbmltcG9ydCB7IGh5ZHJvZ2VuIH0gZnJvbSAnQHNob3BpZnkvaHlkcm9nZW4vdml0ZSc7XHJcbmltcG9ydCB7IG5ldGxpZnlQbHVnaW4gfSBmcm9tICdAbmV0bGlmeS9yZW1peC1lZGdlLWFkYXB0ZXIvcGx1Z2luJztcclxuaW1wb3J0IHsgdml0ZVBsdWdpbiBhcyByZW1peCB9IGZyb20gJ0ByZW1peC1ydW4vZGV2JztcclxuaW1wb3J0IHRzY29uZmlnUGF0aHMgZnJvbSAndml0ZS10c2NvbmZpZy1wYXRocyc7XHJcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgcGx1Z2luczogW1xyXG4gICAgaHlkcm9nZW4oKSxcclxuICAgIHJlbWl4KHtcclxuICAgICAgcHJlc2V0czogW2h5ZHJvZ2VuLnByZXNldCgpXSxcclxuICAgICAgZnV0dXJlOiB7XHJcbiAgICAgICAgdjNfZmV0Y2hlclBlcnNpc3Q6IHRydWUsXHJcbiAgICAgICAgdjNfcmVsYXRpdmVTcGxhdFBhdGg6IHRydWUsXHJcbiAgICAgICAgdjNfdGhyb3dBYm9ydFJlYXNvbjogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgIH0pLFxyXG4gICAgbmV0bGlmeVBsdWdpbigpLFxyXG4gICAgdHNjb25maWdQYXRocygpLFxyXG4gIF0sXHJcbiAgcmVzb2x2ZToge1xyXG4gICAgYWxpYXM6IHtcclxuICAgICAgJ34nOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnYXBwJylcclxuICAgIH0sXHJcbiAgfSxcclxuICBidWlsZDoge1xyXG4gICAgLy8gQWxsb3cgYSBzdHJpY3QgQ29udGVudC1TZWN1cml0eS1Qb2xpY3lcclxuICAgIC8vIHdpdGh0b3V0IGlubGluaW5nIGFzc2V0cyBhcyBiYXNlNjQ6XHJcbiAgICBhc3NldHNJbmxpbmVMaW1pdDogMCxcclxuICB9LFxyXG4gIHNzcjoge1xyXG4gICAgb3B0aW1pemVEZXBzOiB7XHJcbiAgICAgIC8qKlxyXG4gICAgICAgKiBJbmNsdWRlIGRlcGVuZGVuY2llcyBoZXJlIGlmIHRoZXkgdGhyb3cgQ0pTPD5FU00gZXJyb3JzLlxyXG4gICAgICAgKiBGb3IgZXhhbXBsZSwgZm9yIHRoZSBmb2xsb3dpbmcgZXJyb3I6XHJcbiAgICAgICAqXHJcbiAgICAgICAqID4gUmVmZXJlbmNlRXJyb3I6IG1vZHVsZSBpcyBub3QgZGVmaW5lZFxyXG4gICAgICAgKiA+ICAgYXQgL1VzZXJzLy4uLi9ub2RlX21vZHVsZXMvZXhhbXBsZS1kZXAvaW5kZXguanM6MToxXHJcbiAgICAgICAqXHJcbiAgICAgICAqIEluY2x1ZGUgJ2V4YW1wbGUtZGVwJyBpbiB0aGUgYXJyYXkgYmVsb3cuXHJcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9kZXAtb3B0aW1pemF0aW9uLW9wdGlvbnNcclxuICAgICAgICovXHJcbiAgICAgIGluY2x1ZGU6IFtdLFxyXG4gICAgfSxcclxuICB9LFxyXG59KTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFtVyxTQUFTLG9CQUFvQjtBQUNoWSxTQUFTLGdCQUFnQjtBQUN6QixTQUFTLHFCQUFxQjtBQUM5QixTQUFTLGNBQWMsYUFBYTtBQUNwQyxPQUFPLG1CQUFtQjtBQUMxQixPQUFPLFVBQVU7QUFMakIsSUFBTSxtQ0FBbUM7QUFRekMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsU0FBUztBQUFBLElBQ1QsTUFBTTtBQUFBLE1BQ0osU0FBUyxDQUFDLFNBQVMsT0FBTyxDQUFDO0FBQUEsTUFDM0IsUUFBUTtBQUFBLFFBQ04sbUJBQW1CO0FBQUEsUUFDbkIsc0JBQXNCO0FBQUEsUUFDdEIscUJBQXFCO0FBQUEsTUFDdkI7QUFBQSxJQUNGLENBQUM7QUFBQSxJQUNELGNBQWM7QUFBQSxJQUNkLGNBQWM7QUFBQSxFQUNoQjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBSyxLQUFLLFFBQVEsa0NBQVcsS0FBSztBQUFBLElBQ3BDO0FBQUEsRUFDRjtBQUFBLEVBQ0EsT0FBTztBQUFBO0FBQUE7QUFBQSxJQUdMLG1CQUFtQjtBQUFBLEVBQ3JCO0FBQUEsRUFDQSxLQUFLO0FBQUEsSUFDSCxjQUFjO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQVdaLFNBQVMsQ0FBQztBQUFBLElBQ1o7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
