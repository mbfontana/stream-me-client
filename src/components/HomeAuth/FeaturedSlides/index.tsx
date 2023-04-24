import useSWR from "swr";
import styles from "./styles.module.scss";
import courseService, { CourseType } from "@/src/services/courseService";
import Slides from "../../common/Slides";
import { Container } from "reactstrap";

const FeaturedSlides = () => {
  const { data, error } = useSWR("/featured", courseService.getFeatured);

  if (error) return error;
  if (!data)
    return (
      <>
        <p>Loading...</p>
      </>
    );

  return (
    <>
      <Container fluid className="d-flex flex-column align-items-center">
        <p className={styles.title}>FEATURED</p>
        <Slides courses={data.data} />
      </Container>
    </>
  );
};

export default FeaturedSlides;
