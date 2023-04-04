import { Container, Button } from "reactstrap";
import styles from "./styles.module.scss";
import Link from "next/link";

const HeaderNoAuth = () => {
  return (
    <>
      <div className={styles.ctaHeaderTop}>
        <img
          src="/homeNoAuth/logoCta.png"
          alt="Logo CTA"
          className={styles.ctaImageTop}
        />
        <p>Register to have access to the courses</p>
        <img
          src="/homeNoAuth/logoCta.png"
          alt="Logo CTA"
          className={styles.ctaImageTop}
        />
      </div>
      <Container className={styles.nav}>
        <img src="./logo.svg" alt="logo" className={styles.navLogo} />
        <div>
          <Link href="/login">
            <Button className={styles.navButton} outline>
              Sign-in
            </Button>
          </Link>
          <Link href="/register">
            <Button className={styles.navButton} outline>
              Get Started
            </Button>
          </Link>
        </div>
      </Container>
    </>
  );
};

export default HeaderNoAuth;
