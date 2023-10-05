import {terser} from "rollup-plugin-terser";
import typescript from '@rollup/plugin-typescript';

const license = "/**!\n" +
                        " * Cazan  v0.1.0 (https://github.com/AeliaDev/cazan)\n" +
                        " * Copyright 2023 The Cazan Authors\n" +
                        " * Licensed under MIT (https://github.com/AeliaDev/cazan/blob/main/LICENSE)\n" +
                        " */"

export default {
    input: 'src/main.ts',
    output: [
        {
            file: 'dist/cazan.js',
            format: 'es',
            banner: license,
        },{
        file: 'dist/cazan.min.js',
            format: 'es',
            name: 'cazan',
            banner: license,
            plugins: [terser()]
        }
    ],
    plugins: [typescript()],
};