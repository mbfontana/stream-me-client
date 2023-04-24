import FeaturedSection from "@/src/components/HomeAuth/FeaturedSection";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>Stream Me | Home</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
      </Head>
      <main>
        <FeaturedSection />
      </main>
    </>
  );
};

export default Home;
