import HeaderGeneric from "@/src/components/common/GenericHeader";
import styles from "../styles/registerLogin.module.scss";
import Head from "next/head";
import { Container, Form, FormGroup, Label, Input, Button } from "reactstrap";
import Footer from "@/src/components/common/Footer";

const Register = () => {
  return (
    <>
      <Head>
        <title>Stream Me | Register</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
        <script src="https://jsuites.net/v4/jsuites.js"></script>
      </Head>
      <main className={styles.main}>
        <HeaderGeneric logoUrl="/" btnUrl="/login" btnContent="Sign-in" />
        <Container className="py-5">
          <p className={styles.formTitle}>Welcome to Stream Me!</p>
          <Form className={styles.form}>
            <p className="text-center">
              <strong>Register for free</strong>{" "}
            </p>
            <FormGroup>
              <Label for="firstName" className={styles.label}>
                FIRST NAME
              </Label>
              <Input
                id="firstName"
                name="firstName"
                type="text"
                placeholder="Insert your name"
                required
                maxLength={20}
                className={styles.inputName}
              />
            </FormGroup>
            <FormGroup>
              <Label for="lastName" className={styles.label}>
                LAST NAME
              </Label>
              <Input
                id="lastName"
                name="lastName"
                type="text"
                placeholder="Insert your last name"
                required
                maxLength={20}
                className={styles.inputName}
              />
            </FormGroup>
            <FormGroup>
              <Label for="phone" className={styles.label}>
                PHONE
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="(xx) xxxxx-xxxx"
                data-mask="[-]+55 (00) 00000-0000"
                required
                className={styles.input}
              />
            </FormGroup>
            <FormGroup>
              <Label for="email" className={styles.label}>
                E-MAIL
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Inser your e-mail"
                required
                className={styles.input}
              />
            </FormGroup>
            <FormGroup>
              <Label for="birth" className={styles.label}>
                DATE OF BIRTH
              </Label>
              <Input
                id="birth"
                name="birth"
                type="date"
                min="1930-01-01"
                max="2020-12-31"
                required
                className={styles.input}
              />
            </FormGroup>
            <FormGroup>
              <Label for="password" className={styles.label}>
                PASSWORD
              </Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="Insert your password (Min: 6 | Max: 20)"
                required
                minLength={6}
                maxLength={20}
                className={styles.input}
              />
            </FormGroup>
            <FormGroup>
              <Label for="confirmPassword" className={styles.label}>
                CONFIRM PASSWORD
              </Label>
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="Confirme your password"
                required
                minLength={6}
                maxLength={20}
                className={styles.input}
              />
            </FormGroup>
            <Button type="submit" outline className={styles.formBtn}>
              REGISTER
            </Button>
          </Form>
        </Container>
        <Footer />
      </main>
    </>
  );
};

export default Register;
