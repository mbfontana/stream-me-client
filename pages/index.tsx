import Head from "next/head";
import styles from "../styles/HomeNoAuth.module.scss";
import HeaderNoAuth from "@/src/components/homeNoAuth/headerNoAuth";
import PresentationSection from "@/src/components/homeNoAuth/presentationSection";

const HomeNoAuth = () => {
  return (
    <>
      <Head>
        <title>GenericFlix</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
        <meta property="og:title" content="GenericFlix" key="title" />
        <meta name="description" content="INSERT LATER" />
      </Head>
      <main>
        <HeaderNoAuth />
        <PresentationSection />
      </main>
    </>
  );
};

export default HomeNoAuth;
