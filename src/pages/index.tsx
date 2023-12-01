// import clsx from 'clsx';
// import Link from '@docusaurus/Link';
// import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from "@theme/Layout";
import Hero from "@site/src/components/HomepageFeatures";

export default function Home(): JSX.Element {
  return (
    <Layout noFooter={true} title="Home">
      <main>
        <Hero />
      </main>
    </Layout>
  );
}
