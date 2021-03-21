const fs = require("fs").promises;

// exports.onPreInit = async () => {
// 	const files = await fs.readdir(`${__dirname}/src/recipes`);

// 	for (const file of files) {
// 	}

// 	console.log(res);
// };

// exports.createPages = async ({ actions, graphql, reporter }) => {
// 	const { createPage } = actions;
// 	// const blogPostTemplate = require.resolve(`./src/templates/recipes.js`);
// 	const result = await graphql(`
// 		{
// 			allMarkdownRemark(
// 			) {
// 				edges {
// 					node {
// 						frontmatter {
// 						}
// 					}
// 				}
// 			}
// 		}
// 	`);
// 	// Handle errors
// 	if (result.errors) {
// 		reporter.panicOnBuild(`Error while running GraphQL query.`);
// 		return;
// 	}

// 	result.data.allMarkdownRemark.edges.forEach(({ node }) => {
// 		console.log(node);
// 		// createPage({
// 		// 	path: node.frontmatter.slug,
// 		// 	component: blogPostTemplate,
// 		// 	context: {
// 		// 		// additional data can be passed via context
// 		// 		slug: node.frontmatter.slug,
// 		// 	},
// 		// });
// 	});
// };
