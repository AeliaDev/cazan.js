import {terser} from "rollup-plugin-terser"
import typescript from '@rollup/plugin-typescript'

export default {
    input: 'src/index.ts',
    output: [
        {
            file: 'dist/lib/cazan.js',
            format: 'es',
        },{
        file: 'dist/lib/cazan.min.js',
            format: 'es',
            name: 'cazan',
            plugins: [terser()]
        }
    ],
    plugins: [typescript()],
}
