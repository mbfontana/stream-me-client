import Head from "next/head";
import styles from "../styles/registerLogin.module.scss";
import HeaderGeneric from "@/src/components/common/GenericHeader";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import Footer from "@/src/components/common/Footer";
import { useRouter } from "next/router";
import { FormEvent, useEffect, useState } from "react";
import ToastComponent from "@/src/components/common/Toast";
import authService from "@/src/services/authService";

const Login = () => {
  const router = useRouter();
  const [toastIsOpen, setToastIsOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastColor, setToastColor] = useState("");

  useEffect(() => {
    const registerSuccess = router.query.registered;
    if (registerSuccess === "true") {
      setToastColor("bg-success");
      setToastIsOpen(true);
      setToastMessage("Successfuly registered");
      setTimeout(() => {
        setToastIsOpen(false);
      }, 1000 * 4);
    }
  }, [router.query]);

  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email")!.toString();
    const password = formData.get("password")!.toString();
    const rememberMe = formData.get("rememberMe");
    const params = { email, password, rememberMe };

    const { status } = await authService.login(params);

    if (status == 200) {
      router.push("/home");
    } else {
      setToastColor("bg-danger");
      setToastIsOpen(true);
      setToastMessage("Incorrect email or password");
      setTimeout(() => {
        setToastIsOpen(false);
      }, 1000 * 4);
    }
  };

  return (
    <>
      <Head>
        <title>Stream Me | Login</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
      </Head>
      <main className={styles.main}>
        <HeaderGeneric
          logoUrl={"/"}
          btnUrl={"/register"}
          btnContent={"Get Started"}
        />
        <Container className="py-5">
          <p className={styles.formTitle}>Welcome back!</p>
          <Form className={styles.form} onSubmit={handleLogin}>
            <p className="text-center">
              <strong>Take your skills to the next level.</strong>
            </p>
            <FormGroup>
              <Label for="email" className={styles.label}>
                E-MAIL
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Insert your email"
                required
                className={styles.input}
              />
            </FormGroup>
            <FormGroup>
              <Label for="email" className={styles.label}>
                PASSWORD
              </Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="Insert your password"
                required
                className={styles.input}
              />
            </FormGroup>
            <FormGroup>
              <Input
                id="rememberMe"
                name="rememberMe"
                type="checkbox"
                className={styles.inputCheckbox}
              />
              <Label for="rememberMe" className={styles.rememberMeLabel}>
                Remember me?
              </Label>
            </FormGroup>
            <Button type="submit" outline className={styles.formBtn}>
              Sign In
            </Button>
          </Form>
        </Container>
        <Footer />
        <ToastComponent
          color={toastColor}
          isOpen={toastIsOpen}
          message={toastMessage}
        />
      </main>
    </>
  );
};

export default Login;
