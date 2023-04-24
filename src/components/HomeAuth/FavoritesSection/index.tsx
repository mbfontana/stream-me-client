import useSWR from "swr";
import styles from "./styles.module.scss";
import { Container } from "reactstrap";
import Slides from "../../common/Slides";
import courseService from "@/src/services/courseService";

const FavoritesSection = () => {
  const { data, error } = useSWR("/favorites", courseService.getFavorites);

  if (error) return error;
  if (!data)
    return (
      <>
        <p>Loading...</p>
      </>
    );
  return (
    <Container fluid className="d-flex flex-column align-items-center">
      <p className={styles.title}>My List</p>
      {data.data.courses.length > 1 ? (
        <Slides courses={data.data.courses} />
      ) : (
        <p className="py-2">Try to add courses to your favorites list</p>
      )}
    </Container>
  );
};

export default FavoritesSection;
