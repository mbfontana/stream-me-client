import Head from "next/head";
import styles from "../../../styles/episode.module.scss";
import { useRouter } from "next/router";
import HeaderGeneric from "@/src/components/common/GenericHeader";
import courseService, {
  CourseType,
  EpisodeType,
} from "@/src/services/courseService";
import { useEffect, useState } from "react";
import LoadingSpinner from "@/src/components/common/LoadingSpinner";
import { Button, Container } from "reactstrap";
import ReactPlayer from "react-player";
import Footer from "@/src/components/common/Footer";

const Episode = () => {
  const [course, setCourse] = useState<CourseType>();
  const router = useRouter();
  const episodeId = parseFloat(router.query.id?.toString() || "");
  const courseId = router.query.courseId?.toString() || "";

  const getEpisodes = async () => {
    if (typeof courseId !== "string") return;

    const res = await courseService.getCourse(courseId);

    if (res.status === 200) {
      setCourse(res.data);
    }
  };

  useEffect(() => {
    if (courseId) getEpisodes();
  }, [courseId]);

  if (!course?.episodes?.length) return <LoadingSpinner />;

  const handlePreviousEpisode = () => {
    router.push(`/courses/episode/${episodeId - 1}?courseId=${courseId}`);
  };

  const handleNextEpisode = () => {
    router.push(`/courses/episode/${episodeId + 1}?courseId=${courseId}`);
  };

  return (
    <>
      <Head>
        <title>Stream Me | {course.episodes[episodeId].name}</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image" />
      </Head>
      <main>
        <HeaderGeneric
          btnContent="Back to course"
          btnUrl={`/courses/${courseId}`}
          logoUrl="/home"
        />
        <Container className={styles.playerContainer}>
          <p className={styles.episodeTitle}>
            {course.episodes[episodeId].name}
          </p>
          {typeof window === "undefined" ? null : (
            <ReactPlayer
              className={styles.player}
              url={`${
                process.env.NEXT_PUBLIC_BASEURL
              }/episodes/stream?videoUrl=${
                course.episodes[episodeId].videoUrl
              }&token=${
                localStorage.getItem("streamMe-token") ||
                sessionStorage.getItem("streamMe-token")
              }`}
              controls
            />
          )}
          <div className={styles.episodeButtonDiv}>
            <Button
              className={styles.episodeButton}
              disabled={episodeId === 0 ? true : false}
              onClick={handlePreviousEpisode}
            >
              <img
                src="/episode/iconArrowLeft.svg"
                alt="Arrow Left"
                className={styles.arrowImg}
              />
            </Button>
            <Button
              className={styles.episodeButton}
              disabled={course.episodes.length - 1 === episodeId ? true : false}
              onClick={handleNextEpisode}
            >
              <img
                src="/episode/iconArrowRight.svg"
                alt="Arrow Right"
                className={styles.arrowImg}
              />
            </Button>
          </div>
        </Container>
        <Footer />
      </main>
    </>
  );
};

export default Episode;
