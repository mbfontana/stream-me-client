import { EpisodeType } from "@/src/services/courseService";
import styles from "./styles.module.scss";

interface props {
  episode: EpisodeType;
}

const EpisodesList = ({ episode }: props) => {
  const convertSecondsToMinutes = (totalSeconds: number) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    const addPadding = (e: number) => {
      return e.toString().padStart(2, "0");
    };

    return `${addPadding(minutes)}:${addPadding(seconds)}`;
  };

  return (
    <div className={styles.episodeCard}>
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
