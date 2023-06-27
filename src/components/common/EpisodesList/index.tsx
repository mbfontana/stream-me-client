import { EpisodeType } from "@/src/services/courseService";
import styles from "./styles.module.scss";
import { useRouter } from "next/router";

interface props {
  episode: EpisodeType;
  courseId: number;
}

const EpisodesList = ({ episode, courseId }: props) => {
  const router = useRouter();

  const convertSecondsToMinutes = (totalSeconds: number) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    const addPadding = (e: number) => {
      return e.toString().padStart(2, "0");
    };

    return `${addPadding(minutes)}:${addPadding(seconds)}`;
  };

  const handleEpidoseClick = () => {
    router.push(`/courses/episode/${episode.order - 1}?courseId=${courseId}`);
  };

  return (
    <div className={styles.episodeCard} onClick={handleEpidoseClick}>
      <div className={styles.episodeOrderTime}>
        <p className={styles.episodeOrder}>Episode {episode.order}</p>
        <p className={styles.episodeTime}>
          {convertSecondsToMinutes(episode.secondsLong)}
        </p>
      </div>
      <div className={styles.episodeTitleDescription}>
        <p className={styles.episodeTitle}>{episode.name}</p>
        <p className={styles.episodeDescription}>{episode.synopsis}</p>
      </div>
    </div>
  );
};

export default EpisodesList;
