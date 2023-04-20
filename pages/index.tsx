import Head from "next/head";
import styles from "../styles/HomeNoAuth.module.scss";
import HeaderNoAuth from "@/src/components/homeNoAuth/headerNoAuth";
import PresentationSection from "@/src/components/homeNoAuth/presentationSection";
import CardsSection from "@/src/components/homeNoAuth/cardsSection";
import SlideSection from "@/src/components/homeNoAuth/slideSection";
import { GetStaticProps } from "next";
import courseService, { CourseType } from "@/src/services/courseService";
import { ReactNode, useEffect } from "react";
import Footer from "@/src/components/common/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

interface IndexPageProps {
  children?: ReactNode;
  courses: CourseType[];
}

const HomeNoAuth = ({ courses }: IndexPageProps) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Head>
        <title>GenericFlix</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
        <meta property="og:title" content="GenericFlix" key="title" />
        <meta name="description" content="INSERT LATER" />
      </Head>
      <main>
        <div
          className={styles.headerBackground}
          data-aos="fade-zoom-in"
          data-aos-duration="1600"
        >
          <HeaderNoAuth />
          <PresentationSection />
        </div>
        <div data-aos="fade-right" data-aos-duration="1200">
          <CardsSection />
        </div>
        <div data-aos="fade-up" data-aos-duration="1200">
          <SlideSection courses={courses} />
        </div>

        <Footer />
      </main>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await courseService.getReleases();
  return {
    props: {
      courses: res.data,
    },
    revalidate: 3600 * 24,
  };
};

export default HomeNoAuth;
