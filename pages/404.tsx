import type { NextPage } from "next";

import Layout from "@/components/layout/Layout";

import Meta from "@/utils/meta/Meta";

const Error404: NextPage = () => (
  <Meta title="Page not found">
    <Layout>
      <>Yo. 404</>
    </Layout>
  </Meta>
);

export default Error404;
