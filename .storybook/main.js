const path = require("path");

module.exports = {
	stories: ["../**/*.stories.mdx", "../**/*.stories.@(js|jsx|ts|tsx)"],
	addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/preset-create-react-app"],
	webpackFinal: async (config) => {
		config.module.rules.push(
			{
				test: /\,css&/,
				use: [
					{
						loader: "postcss-loader",
						options: {
							ident: "postcss",
							plugins: [require("tailwindcss"), require("autoprefixer")]
						}
					}
				],
				include: path.resolve(__dirname, "../")
			},
			{ type: "javascript/auto", test: /\.mjs$/, include: /node_modules/ }
		);
		return config;
	}
};
