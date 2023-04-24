import { Container, Form, Input } from "reactstrap";
import styles from "./styles.module.scss";
import Link from "next/link";
import { useState } from "react";
import Modal from "react-modal";
import { useRouter } from "next/router";

Modal.setAppElement("#__next");

const HeaderAuth = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const router = useRouter();

  const handleLogout = () => {
    sessionStorage.removeItem("streamMe-token");
    localStorage.removeItem("streamMe-token");
    router.push("/");
  };

  return (
    <Container className={styles.nav}>
      <Link href="/home">
        <img
          src="/logo.svg"
          alt="Logo Stream Me"
          className={styles.imgLogoNav}
        />
      </Link>
      <div className={styles.searchContainer}>
        <Form>
          <Input
            name="search"
            type="search"
            placeholder="Search"
            className={styles.input}
          />
        </Form>
        <img
          src="/homeAuth/iconSearch.svg"
          alt="Serach Icon"
          className={styles.searchImg}
        />
        <p
          id="modalParent"
          className={styles.userProfile}
          onClick={() => setModalOpen(!modalOpen)}
        >
          AB
        </p>
      </div>
      <Modal
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(!modalOpen)}
        shouldCloseOnEsc={true}
        className={styles.modal}
        overlayClassName={styles.overlayModal}
      >
        <Link href="/profile" className="text-decoration-none">
          <div className={styles.modalOptContainer}>
            <img
              src="/icons/profile.svg"
              alt="Profile Icon"
              className={styles.modalIcon}
            />
            <p className={styles.modalLink}>My Account</p>
          </div>
        </Link>
        <div className={styles.modalOptContainer} onClick={handleLogout}>
          <img
            src="/icons/logout.svg"
            alt="Logout Icon"
            className={styles.modalIcon}
          />
          <p className={styles.modalLink}>Logout</p>
        </div>
      </Modal>
    </Container>
  );
};

export default HeaderAuth;