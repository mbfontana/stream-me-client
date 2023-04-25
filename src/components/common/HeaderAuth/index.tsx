import { Container, Form, Input } from "reactstrap";
import styles from "./styles.module.scss";
import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";
import Modal from "react-modal";
import { useRouter } from "next/router";
import profileService from "@/src/services/profileService";

Modal.setAppElement("#__next");

const HeaderAuth = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [userInitials, setUserInitials] = useState("");
  const [searchName, setSearchName] = useState("");
  const router = useRouter();

  const handleSearchBar = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push(`/search?name=${searchName}`);
    setSearchName("");
  };

  const handleSearchClick = () => {
    router.push(`/search?name=${searchName}`);
    setSearchName("");
  };

  useEffect(() => {
    profileService.getCurrentUser().then((user) => {
      const firstInitial = user.firstName.charAt(0);
      const lastInitial = user.lastName.charAt(0);
      setUserInitials(firstInitial + lastInitial);
    });
  }, []);

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
        <Form onSubmit={handleSearchBar}>
          <Input
            name="search"
            type="search"
            placeholder="Search"
            className={styles.input}
            value={searchName}
            onChange={(event) => setSearchName(event.target.value)}
          />
        </Form>
        <img
          src="/homeAuth/iconSearch.svg"
          alt="Search Icon"
          className={styles.searchImg}
          onClick={handleSearchClick}
        />
        <p
          id="modalParent"
          className={styles.userProfile}
          onClick={() => setModalOpen(!modalOpen)}
        >
          {userInitials}
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
