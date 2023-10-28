import type { NextPage } from "next";

import Layout from "@/components/layout/Layout";

import Meta from "@/utils/meta/Meta";
import War from "@/components/screens/War";

const WarPage: NextPage = () => (
  <Meta title="War">
    <Layout>
      <War />
    </Layout>
  </Meta>
);

export default WarPage;
