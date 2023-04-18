import { CourseType } from "@/src/services/courseService";
import styles from "./styles.module.scss";

interface props {
  course: CourseType;
}
var aux = 0;
const SlideCard = ({ course }: props) => {
  console.log(aux);
  aux++;
  console.log(course);
  return (
    <div className={styles.slide}>
      <img
        src={`${process.env.NEXT_PUBLIC_BASEURL}/${course.thumbnailUrl}`}
        alt={course.name}
        className={styles.slideImg}
      />
      <p className={styles.slideTitle}>{course.name}</p>
      <p className={styles.slideDescription}>{course.synopsis}</p>
    </div>
  );
};

export default SlideCard;
