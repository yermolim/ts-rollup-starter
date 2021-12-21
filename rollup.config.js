import license from "rollup-plugin-license";
import externals from "rollup-plugin-node-externals";
import dts from "rollup-plugin-dts";
// import commonjs from "@rollup/plugin-commonjs";
// import { nodeResolve } from "@rollup/plugin-node-resolve";
// import { terser } from "rollup-plugin-terser";

export default [  
  // main build
  {
    input: "tsc/index.js",
    output: [
      { file: "dist/index.js", format: "esm"},
      // TODO: configure terser to prevent imports from shadowing variables
      // { file: "dist/index.min.js", format: "es", plugins: [terser()] },
    ],
    external: [],
    plugins: [
      license({
        banner: `
          MIT License

          Copyright (C) 2021-present Volodymyr Yermolenko (yermolim@gmail.com)
          
          Permission is hereby granted, free of charge, to any person obtaining a copy
          of this software and associated documentation files (the "Software"), to deal
          in the Software without restriction, including without limitation the rights
          to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
          copies of the Software, and to permit persons to whom the Software is
          furnished to do so, subject to the following conditions:
          
          The above copyright notice and this permission notice shall be included in all
          copies or substantial portions of the Software.
          
          THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
          IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
          FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
          AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
          LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
          OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
          SOFTWARE.
        `,
      }),
      externals({
        deps: true,
        devDeps: false,
      }),
    ]
  },
  {
    input: "tsc/index.d.ts",
    output: [
      { file: "dist/index.d.ts", format: "esm" },
    ],
    plugins: [
      dts(),
    ],
  },
  // demo build
  // {
  //   input: "tsc/_demo/demo.js",
  //   output: [
  //     { file: "demo/demo.js", format: "esm" },
  //   ],
  //   plugins: [
  //     nodeResolve({
  //       browser: true
  //     }),
  //     commonjs(),
  //   ],
  // },
];
