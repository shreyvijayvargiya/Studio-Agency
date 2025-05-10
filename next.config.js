/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
	webpack: (config, { isServer }) => {
		config.module.rules.push({
			test: /\.(js|jsx)$/,
			include: /node_modules[\\/]react-svg-map[\\/]src/,
			use: {
				loader: "babel-loader",
				options: {
					presets: ["next/babel"],
				},
			},
		});
		if (!isServer) {
			config.resolve.alias["yjs"] = path.resolve(
				__dirname,
				"../node_modules/yjs"
			);
		}
		return config;
	},
};

module.exports = nextConfig;
