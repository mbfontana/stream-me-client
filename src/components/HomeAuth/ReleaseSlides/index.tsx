import useSWR from "swr";
import courseService from "@/src/services/courseService";
import styles from "./styles.module.scss";
import { Container } from "reactstrap";
import Slides from "../../common/Slides";
import LoadingSpinner from "../../common/LoadingSpinner";

const ReleaseSlides = () => {
  const { data, error } = useSWR("/releases", courseService.getReleases);

  if (error) return error;
  if (!data) return <LoadingSpinner />;
  
  return (
    <Container fluid className="d-flex flex-column align-items-center">
      <p className={styles.title}>RELEASES</p>
      <Slides courses={data.data} />
    </Container>
  );
};

export default ReleaseSlides;
