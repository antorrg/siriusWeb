import { defineConfig } from 'astro/config';
import {viteStaticCopy} from 'vite-plugin-static-copy';

export default defineConfig({
  vite: {
    plugins: [
      viteStaticCopy({
        targets: [
          {
            src: 'node_modules/bootstrap/dist/js/bootstrap.bundle.min.js',
            dest: 'scripts'
          }
        ]
      })
    ]
  }
});

// // @ts-check
// import { defineConfig } from 'astro/config';

// // https://astro.build/config
// export default defineConfig({});
