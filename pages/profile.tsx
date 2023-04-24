import Footer from "@/src/components/common/Footer";
import Head from "next/head";
import styles from "../styles/profile.module.scss";
import UserForm from "@/src/components/Profile/UserForm";
import HeaderAuth from "@/src/components/common/HeaderAuth";
import { Button, Col, Container, Row } from "reactstrap";
import { useState } from "react";
import PasswordForm from "@/src/components/Profile/Password";

const Profile = () => {
  const [form, setForm] = useState<"profile" | "password">("profile");
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
              <Button
                outline
                className={styles.renderFormBtn}
                style={{ color: form === "profile" ? "#FF0A54" : "#fff" }}
                onClick={() => setForm("profile")}
              >
                PROFILE
              </Button>
              <Button
                outline
                className={styles.renderFormBtn}
                style={{ color: form === "password" ? "#FF0A54" : "#fff" }}
                onClick={() => setForm("password")}
              >
                PASSWORD
              </Button>
            </Col>
            <Col md>{form === "profile" ? <UserForm /> : <PasswordForm />}</Col>
          </Row>
        </Container>
        <Footer />
      </main>
    </>
  );
};

export default Profile;
