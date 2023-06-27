import styles from "../../styles/course.module.scss";
import Head from "next/head";
import HeaderAuth from "@/src/components/common/HeaderAuth";
import Footer from "@/src/components/common/Footer";
import { useRouter } from "next/router";
import courseService, { CourseType } from "@/src/services/courseService";
import { useEffect, useState } from "react";
import { Button, Container } from "reactstrap";
import LoadingSpinner from "@/src/components/common/LoadingSpinner";
import EpisodesList from "@/src/components/common/EpisodesList";

const CoursePage = () => {
  const [course, setCourse] = useState<CourseType>();
  const [liked, setLiked] = useState<boolean>(false);
  const [favorited, setFavorited] = useState<boolean>(false);

  const router = useRouter();
  const { id } = router.query;

  async function getCourse() {
    if (typeof id !== "string") return;

    const res = await courseService.getCourse(id);

    if (res.status === 200) {
      setCourse(res.data);
      setLiked(res.data.liked);
      setFavorited(res.data.favorited);
    }
  }

  useEffect(() => {
    getCourse();
  }, [id]);

  const handleLike = async () => {
    if (typeof id !== "string") return;

    if (liked === true) {
      await courseService.removeLike(id);
      setLiked(false);
    } else {
      await courseService.like(id);
      setLiked(true);
    }
  };

  const handleFav = async () => {
    if (typeof id !== "string") return;

    if (favorited === true) {
      await courseService.removeFavorite(id);
      setFavorited(false);
    } else {
      await courseService.addFavorite(id);
      setFavorited(true);
    }
  };

  if (course === undefined) return <LoadingSpinner />;

  return (
    <>
      <Head>
        <title>Stream Me | {course.name}</title>
        <link rel="shortcut icon" href="favicon.svg" type="image/x-icon" />
      </Head>
      <main>
        <div
          style={{
            backgroundImage: `linear-gradient(to bottom, #6666661a, #151515), url(${process.env.NEXT_PUBLIC_BASEURL}/${course?.thumbnailUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "550px",
          }}
        >
          <HeaderAuth />
        </div>
        <Container className={styles.courseInfo}>
          <p className={styles.courseTitle}>{course.name}</p>
          <p className={styles.courseDescription}>{course.synopsis}</p>
          <Button outline className={styles.courseBtn}>
            WATCH NOW!
            <img
              src="/buttonPlay.svg"
              alt="Watch Now Button"
              className={styles.buttonImg}
            />
          </Button>
          <div className={styles.userInteractions}>
            <img
              src={liked ? "/course/iconLiked.svg" : "/course/iconLike.svg"}
              alt={liked ? "Liked Icon" : "Like Icon"}
              className={styles.interactionsBtn}
              onClick={handleLike}
            />
            <img
              src={
                favorited
                  ? "/course/iconFavorited.svg"
                  : "/course/iconAddFav.svg"
              }
              alt={favorited ? "Favorited Icon" : "Add to Favorite Icon"}
              className={styles.interactionsBtn}
              onClick={handleFav}
            />
          </div>
        </Container>
        <Container className={styles.episodeInfo}>
          <p className={styles.episodeDivision}>EPISODES</p>
          <p className={styles.numberOfEpisodes}>{course.episodes?.length}</p>
          {course.episodes?.length === 0 ? (
            <p>Soon new episodes! &#x1F604;</p>
          ) : (
            <>
              {course.episodes?.map((episode) => (
                <EpisodesList
                  key={episode.id}
                  episode={episode}
                  courseId={course.id}
                />
              ))}
            </>
          )}
        </Container>
        <Footer />
      </main>
    </>
  );
};

export default CoursePage;
