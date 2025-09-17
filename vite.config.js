import { defineConfig } from 'vite'

export default defineConfig(env => {
  const production = env.mode === 'production'

  return {
    // This assumes we are deploying via GitHub Pages to:
    //   https://<USERNAME>.github.io/en-roads-embed-demo/
    // If you want to deploy to a different host or have a different repo
    // name, see:
    //   https://vite.dev/guide/static-deploy.html
    base: '/en-roads-embed-demo/',

    // Load static files from `static` (instead of the default `public`)
    publicDir: 'static',

    // Don't clear the screen in dev mode so that we can see builder output
    clearScreen: false,

    // Inject special values into the generated JS
    define: {
      // Set a flag to indicate that this is a production build
      __PRODUCTION__: production
    },

    build: {
      // Write output files to `public` (instead of the default `dist`)
      outDir: 'public',

      // Write js/css files to `public` (instead of the default `<outDir>/assets`)
      assetsDir: ''
    },

    server: {
      // Run the dev server at `localhost:8080` by default
      port: 8080,

      // Disable CORS restrictions for local dev server (for testing embed library)
      cors: false
    }
  }
})
