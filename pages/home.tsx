import CategorySection from "@/src/components/HomeAuth/CategorySection";
import FavoriteSlides from "@/src/components/HomeAuth/FavoriteSlides";
import FeaturedBanner from "@/src/components/HomeAuth/FeaturedBanner";
import FeaturedSlides from "@/src/components/HomeAuth/FeaturedSlides";
import ReleaseSlides from "@/src/components/HomeAuth/ReleaseSlides";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>Stream Me | Home</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
      </Head>
      <main>
        <FeaturedBanner />
        <ReleaseSlides />
        <FavoriteSlides />
        <FeaturedSlides />
        <CategorySection />
      </main>
    </>
  );
};

export default Home;
