// import clsx from 'clsx';
// import Link from '@docusaurus/Link';
// import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from "@theme/Layout";
import Hero from "@site/src/components/HomepageFeatures";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../components";

export default function Home(): JSX.Element {
  return (
    <Layout noFooter={true} title="Home">
      <ChakraProvider theme={theme}>
        <main>
          <Hero />
        </main>
      </ChakraProvider>
    </Layout>
  );
}
