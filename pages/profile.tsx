import Footer from "@/src/components/common/Footer";
import Head from "next/head";
import styles from "../styles/profile.module.scss";
import UserForm from "@/src/components/Profile/UserForm";
import HeaderAuth from "@/src/components/common/HeaderAuth";
import { Button, Col, Container, Row } from "reactstrap";

const Profile = () => {
  return (
    <>
      <Head>
        <title>Stream Me | My Account</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
      </Head>
      <main>
        <div className={styles.header}>
          <HeaderAuth />
        </div>
        <Container className="py-5">
          <p className={styles.title}>My Account</p>
          <Row className="pt-3 pb-5">
            <Col md={4} className={styles.btnColumn}>
              <Button outline className={styles.renderFormBtn}>
                PROFILE
              </Button>
              <Button outline className={styles.renderFormBtn}>
                PASSWORD
              </Button>
            </Col>
            <Col md>
              <UserForm />
            </Col>
          </Row>
        </Container>
        <Footer />
      </main>
    </>
  );
};

export default Profile;
