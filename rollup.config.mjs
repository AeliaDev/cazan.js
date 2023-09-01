import {terser} from "rollup-plugin-terser";
import typescript from '@rollup/plugin-typescript';

export default {
    input: 'src/main.ts',
    output: [
        {
            file: 'dist/cazan.js',
            format: 'es',
            banner: "/*!\n" +
                " * Cazan  v0.1.0 (https://github.com/cazanjs/cazan)\n" +
                " * Copyright 2023 The Cazan Authors\n" +
                " * Licensed under MIT (https://github.com/cazanjs/cazan/blob/main/LICENSE)\n" +
                " */",
        },{
        file: 'dist/cazan.min.js',
            format: 'es',
            name: 'cazan',
            banner: "/*!\n" +
                " * Cazan  v0.1.0 (https://github.com/cazanjs/cazan)\n" +
                " * Copyright 2023 The Cazan Authors\n" +
                " * Licensed under MIT (https://github.com/cazanjs/cazan/blob/main/LICENSE)\n" +
                " */",
            plugins: [terser()]
        }
    ],
    plugins: [typescript()],
};