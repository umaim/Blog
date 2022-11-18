import { graphql, HeadFC, HeadProps, PageProps } from "gatsby";
import { GatsbyImage, getImage, ImageDataLike } from "gatsby-plugin-image";
import * as React from "react";
import Layout from "../../components/Layout/layout";
import Seo from "../../components/Seo/seo";

// type DataProps = {
//   mdx: {
//     frontmatter: {
//       title: string;
//       date: string;
//       hero_image_alt: string;
//       hero_image_credit_link: string;
//       hero_image_credit_text: string;
//       hero_image: ImageDataLike;
//     };
//   };
// };

type DataProps = Queries.BlogPostQuery;

const BlogPost: React.FC<PageProps<DataProps>> = ({
  data,
  children,
}: PageProps<DataProps>) => {
  const image = getImage(
    (data?.mdx?.frontmatter?.hero_image as ImageDataLike) || null
  );
  return (
    <Layout pageTitle={data?.mdx?.frontmatter?.title || ""}>
      <p>{data?.mdx?.frontmatter?.date}</p>
      {image && (
        <>
          <GatsbyImage
            image={image}
            alt={data?.mdx?.frontmatter?.hero_image_alt || ""}
          />
          <p>
            Photo Credit:{" "}
            {data?.mdx?.frontmatter?.hero_image_credit_link &&
              data?.mdx?.frontmatter?.hero_image_credit_text && (
                <a
                  href={data?.mdx?.frontmatter?.hero_image_credit_link}
                  target="_blank"
                >
                  {data?.mdx?.frontmatter?.hero_image_credit_text}
                </a>
              )}
          </p>
        </>
      )}
      {children}
    </Layout>
  );
};

export const query = graphql`
  query BlogPost($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

export const Head: HeadFC<DataProps> = ({ data }: HeadProps<DataProps>) => {
  return <Seo title={data?.mdx?.frontmatter?.title || ""} />;
};

export default BlogPost;
