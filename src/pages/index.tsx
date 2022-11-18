import { HeadFC, PageProps } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";

import Layout from "../components/Layout/layout";
import Seo from "../components/Seo/seo";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout pageTitle="Home Page">
      <>
        <p>I'm making this by following the Gatsby Tutorial.</p>
        <StaticImage alt="Bing Wallpaper" src="../images/th.webp" />
      </>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <Seo title="Home Page" />;
