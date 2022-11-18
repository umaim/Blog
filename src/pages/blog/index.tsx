import * as React from "react";
import { graphql, HeadFC, Link, PageProps } from "gatsby";
import Layout from "../../components/Layout/layout";
import Seo from "../../components/Seo/seo";

// type DataProps = {
//   allMdx: {
//     nodes: [
//       {
//         id: string;
//         excerpt: string;
//         frontmatter: {
//           title: string;
//           date: string;
//           slug: string;
//         };
//       }
//     ];
//   };
// };

type DataProps = Queries.BlogPageQuery;

const BlogPage: React.FC<PageProps<DataProps>> = ({
  data,
}: PageProps<DataProps>) => {
  return (
    <Layout pageTitle="My Blog Posts">
      {data.allMdx.nodes.map((node) => (
        <article key={node.id}>
          <h2>
            <Link to={`/blog/${node?.frontmatter?.slug || ""}`}>
              {node?.frontmatter?.title || ""}
            </Link>
          </h2>
          <p>Posted: {node?.frontmatter?.date || ""}</p>
        </article>
      ))}
    </Layout>
  );
};

export const query = graphql`
  query BlogPage {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
        }
        id
        excerpt
      }
    }
  }
`;

export const Head: HeadFC = () => <Seo title="My Blog Posts" />;

export default BlogPage;
