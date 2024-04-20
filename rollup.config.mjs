import {terser} from "rollup-plugin-terser"
import typescript from '@rollup/plugin-typescript'

export default {
    input: 'src/index.ts',
    output: [
        {
            file: 'dist/cazan.js',
            format: 'es',
        },{
        file: 'dist/cazan.min.js',
            format: 'es',
            name: 'cazan',
            plugins: [terser()]
        }
    ],
    plugins: [typescript()],
}
