import HeaderGeneric from "@/src/components/common/GenericHeader";
import styles from "../styles/registerLogin.module.scss";
import Head from "next/head";

const Register = () => {
  return (
    <>
      <Head>
        <title>Stream Me | Register</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
      </Head>
      <main>
        <HeaderGeneric logoUrl="/" btnUrl="/login" btnContent="Sign-in"/>
      </main>
    </>
  );
};

export default Register;
