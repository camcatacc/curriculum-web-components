/**
 * Fancy rollup config to rule newCRM!
 */
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
import path from "path";
import copy from "rollup-plugin-copy";
import image from "@rollup/plugin-image";
import includePaths from "rollup-plugin-includepaths";
import autoprefixer from "autoprefixer";
import ttypescript from "ttypescript";
import dts from "rollup-plugin-dts";

const postcssUrl = require("postcss-url");

const packageJson = require("./package.json");
// postcss-url options
const rollUpConfig = [
	{
		input: "src/index.ts",
		output: [
			{
				file: packageJson.main, // CommonJS
				format: "cjs",
				sourcemap: true
			},
			{
				file: packageJson.module, // ES Module
				format: "esm",
				sourcemap: true
			}
		],
		plugins: [
			peerDepsExternal(), // Threat peer deps as external and don't bundle them
			resolve(), // resolve paths
			commonjs(), // Convert CommonJS modules to ES6,
			typescript({ useTsconfigDeclarationDir: true, typescript: ttypescript }), // Transpile typescript and emit declaration files
			postcss({
				// compile css/scss
				minimize: true,
				sourceMap: false,
				to: "./dist/css/style.css",
				autoModules: true,
				extract: "css/style.css",
				extensions: [".css", ".scss"],
				use: [
					// Set (node-)sass to be used and set include paths to resolve node_modules like sky-toolkit-core
					[
						"sass",
						{
							includePaths: [path.resolve("node_modules")]
						}
					]
				],
				plugins: [
					postcssUrl({
						// Parse assets like fonts
						url: "copy",
						// base path to search assets from
						basePath: path.resolve(__dirname, "src/assets"),
						useHash: false
					}),
					autoprefixer
				]
			}),
			includePaths({
				// allow relative paths for svg (TS/JS is already done by tsconfig.js)
				paths: ["src"],
				extensions: [".svg"]
			}),
			image(), // Base64 images
			copy({
				// Copy all assets to dist (Not sure if we actually need them)
				targets: [
					{ src: "src/assets", dest: "dist" },
					{ src: "scripts/releases", dest: "dist" }
				]
			})
		]
	},
	{
		input: "./types/index.d.ts",
		output: [
			{
				format: "es",
				file: `dist/index.d.ts`
			}
		],
		external: [/\.scss$/], // ignore .scss file
		plugins: [dts()]
	}
];

export default rollUpConfig;
