import { CourseType } from "@/src/services/courseService";
import styles from "./styles.module.scss";
import Slides from "../../common/Slides";
import { Button, Container } from "reactstrap";
import Link from "next/link";

interface props {
  courses: CourseType[];
}

const SlideSection = ({ courses }: props) => {
  return (
    <Container fluid className="d-flex flex-column align-items-center py-5">
      <p className={styles.sectionTitle}>SOME OF THE AVAILABLE CLASSES</p>
      <Slides courses={courses} />
      <Link href="/register">
        <Button outline color="light" className={styles.slideSectionBtn}>
          Register to have access!
        </Button>
      </Link>
    </Container>
  );
};

export default SlideSection;
