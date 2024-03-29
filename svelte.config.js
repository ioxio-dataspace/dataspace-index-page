import adapter from "@sveltejs/adapter-static"
import preprocess from "svelte-preprocess"

/** @type {import('@sveltejs/kit').Config} */

const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: [
    preprocess({
      scss: {
        // make variables accessible in components without explicit import
        prependData:
          '@use "src/theme/variables.scss" as *;' +
          '@use "src/theme/mixins.scss" as *;',
      },
    }),
  ],
  kit: {
    prerender: {
      crawl: false,
    },
    // inline all stylesheets smaller than 5kb
    inlineStyleThreshold: 5120,
    adapter: adapter(),
    alias: {
      $components: "src/components",
      $lib: "src/lib",
      $conf: "src/conf",
      $theme: "src/theme",
    },
  },
}

export default config
