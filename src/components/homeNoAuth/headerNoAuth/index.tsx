import { Container, Button } from "reactstrap";
import styles from "./styles.module.scss";

const HeaderNoAuth = () => {
  return (
    <>
      <div className={styles.ctaHeaderTop}>
        <CtaImage />
        <p>Register to have access to the courses</p>
        <CtaImage />
      </div>
      <Container>
        <img src="./logo.svg" alt="logo" />
        <div>
          <Button>Sign-in</Button>
        </div>
      </Container>
    </>
  );
};

const CtaImage = () => {
  return (
    <img
      src="/homeNoAuth/logoCta.png"
      alt="Logo CTA"
      className={styles.ctaImageTop}
    />
  );
};

export default HeaderNoAuth;
