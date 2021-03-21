import React from "react";
import { graphql } from "gatsby";

export default function recipes({ data }) {
	const { html } = data.markdownRemark;

	return (
		<div>
			<h1>Template</h1>
			<div dangerouslySetInnerHTML={{ __html: html }}></div>
		</div>
	);
}

// export const pageQuery = graphql`
// 	query($slug: String!) {
// 		markdownRemark(frontmatter: { slug: { eq: $slug } }) {
// 			html
// 			frontmatter {
// 				tag
// 			}
// 		}
// 	}
// `;
