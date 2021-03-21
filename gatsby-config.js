module.exports = {
	siteMetadata: {
		title: "based-cooking-js",
	},
	plugins: [
		"gatsby-plugin-sass",
		"gatsby-plugin-react-helmet",
		"gatsby-plugin-sitemap",
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "recipes",
				path: "./src/recipes/",
			},
			__key: "recipes",
		},
		"gatsby-transformer-remark",
	],
};
