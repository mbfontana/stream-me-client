import categoryService from "@/src/services/categoryService";
import useSWR from "swr";
import Slides from "../../common/Slides";
import { Container } from "reactstrap";
import styles from "./styles.module.scss";

interface props {
  id: number;
  name: string;
}

const CategorySlides = ({ id, name }: props) => {
  const { data, error } = useSWR(`/categoires/${id}`, () =>
    categoryService.getOneById(id)
  );

  if (error) return error;
  if (!data)
    return (
      <>
        <p>Loading...</p>
      </>
    );

  return (
    <Container fluid className="d-flex flex-column align-items-center">
      <p className={styles.title}>{name}</p>
      <Slides courses={data.data.courses} />{" "}
    </Container>
  );
};

export default CategorySlides;
