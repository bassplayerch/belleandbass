import React, { FC } from 'react';

import Layout from '../components/Layout';
import SEO from '../components/Seo';

const IndexPage: FC = () => (
  <Layout>
    <SEO description="asd" title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi people</h1>
  </Layout>
);

export default IndexPage;
