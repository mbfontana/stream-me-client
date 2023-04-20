import Link from "next/link";
import styles from "./styles.module.scss";
import { Button, Container, Row, Col } from "reactstrap";

const PresentationSection = () => {
  return (
    <>
      <Container className="py-5">
        <Row className={styles.presentationRow}>
          <Col md>
            <p className={styles.subtitle}>ILIMITED ACCESS</p>
            <p className={styles.title}>
              Give your carrer a boost with <br /> our top courses
            </p>
            <p className={styles.description}>
              Study everywhere, anytime, and take your skills <br /> to the next
              level
            </p>
            <p>
              <Link href="/register" className="btnLink">
                <Button outline className={styles.btnCta}>
                  ACCESS NOW
                  <img
                    src="./buttonPlay.svg"
                    alt="CTA Button"
                    className={styles.btnImg}
                  />
                </Button>
              </Link>
            </p>
          </Col>
          <Col md>
            <img
              src="./homeNoAuth/imgPresentation.png"
              alt="Presentation Image"
              className={styles.imgPresentation}
            />
          </Col>
        </Row>
        <Row>
          <Col className={styles.arrowDownCol}>
            <img
              src="./homeNoAuth/iconArrowDown.svg"
              alt="Scroll Arrow Down"
              className={styles.arrowDown}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PresentationSection;
