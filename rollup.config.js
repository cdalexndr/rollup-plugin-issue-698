import typescript from '@rollup/plugin-typescript'

export default {
    input: "src/index.ts",
    output: [{
        file: "build/bundle.js",
        format: "iife",
        //uncomment below to get a new error
        //,dir: ".rollup.dir"
    }],
    plugins: [typescript({
        cacheDir: '.rollup.tscache',
    })]
}
