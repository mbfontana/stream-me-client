import { Container } from "reactstrap";
import styles from "./styles.module.scss";

type Course = {
  title: string;
  description: string;
};

const coursesList: Course[] = [
  {
    title: "Provisory",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptatum maiores ab, atque iure inventore vel culpa exercitationem sed eos adipisci magnam dolor at necessitatibus unde id eius, totam explicabo.,",
  },
  {
    title: "Provisory",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptatum maiores ab, atque iure inventore vel culpa exercitationem sed eos adipisci magnam dolor at necessitatibus unde id eius, totam explicabo.,",
  },
  {
    title: "Provisory",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptatum maiores ab, atque iure inventore vel culpa exercitationem sed eos adipisci magnam dolor at necessitatibus unde id eius, totam explicabo.,",
  },
  {
    title: "Provisory",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptatum maiores ab, atque iure inventore vel culpa exercitationem sed eos adipisci magnam dolor at necessitatibus unde id eius, totam explicabo.,",
  },
  {
    title: "Provisory",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptatum maiores ab, atque iure inventore vel culpa exercitationem sed eos adipisci magnam dolor at necessitatibus unde id eius, totam explicabo.,",
  },
  {
    title: "Provisory",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptatum maiores ab, atque iure inventore vel culpa exercitationem sed eos adipisci magnam dolor at necessitatibus unde id eius, totam explicabo.,",
  },
];

const CardsSection = () => {
  return (
    <>
      <p className={styles.sectionTitle}>A broad selection of courses</p>
      <Container className={styles.sectionContainer}>
        {coursesList.map((e, index) => {
          const className = `card${index+1}`;
          return (
            <Card
              title={e.title.toLocaleUpperCase()}
              description={e.description}
              className={className}
              key={index}
            />
          );
        })}
      </Container>
    </>
  );
};

export default CardsSection;

type CardProps = Course & {
  className: string;
};

const Card = ({ className, title, description }: CardProps) => {
  return (
    <div className={styles[className]}>
      <p className={styles.cardTitle}>{title}</p>
      <p className={styles.cardDescription}>{description}</p>
    </div>
  );
};
