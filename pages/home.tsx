import HeaderAuth from "@/src/components/common/HeaderAuth";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>Stream Me | Home</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
      </Head>
      <main>
        <HeaderAuth />
      </main>
    </>
  );
};

export default Home;
