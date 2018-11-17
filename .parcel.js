const Path = require('path')
const Bundler = require('parcel-bundler')
const { name: OBJECT_NAME } = require('./package.json')

// Parcel entry files
const entryFiles = Path.join(__dirname, 'src/*.html')

// Bundler options
const options = {
  outDir: './dist',
  publicUrl: `./`,
  watch: false,
  cache: false,
  scopeHoist: false,
  sourceMaps: false
}

async function runBundle() {
  // Initializes a bundler using the entrypoint location and options provided
  const bundler = new Bundler(entryFiles, options)

  // Run the bundler, this returns the main bundle
  // Use the events if you're using watch mode as this promise will only trigger once and not for every rebuild
  bundler.bundle()
}

runBundle()