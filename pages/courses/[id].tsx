import styles from "../../styles/course.module.scss";
import Head from "next/head";
import HeaderAuth from "@/src/components/common/HeaderAuth";
import Footer from "@/src/components/common/Footer";
import { useRouter } from "next/router";
import courseService, { CourseType } from "@/src/services/courseService";
import { useEffect, useState } from "react";

const CoursePage = () => {
  const [course, setCourse] = useState<CourseType>();
  const router = useRouter();
  const { id } = router.query;

  async function getCourse() {
    if (typeof id !== "string") return;
    
    const res = await courseService.getCourse(id);

    if (res.status === 200) {
      setCourse(res.data);
    }
  }

  useEffect(() => {
    getCourse();
  }, [id]);

  return (
    <>
      <Head>
        <title>Stream Me | {course?.name}</title>
        <link rel="shortcut icon" href="favicon.svg" type="image/x-icon" />
      </Head>
      <main>
        <HeaderAuth></HeaderAuth>
        <h1>{course?.name}</h1>
        <Footer></Footer>
      </main>
    </>
  );
};

export default CoursePage;
