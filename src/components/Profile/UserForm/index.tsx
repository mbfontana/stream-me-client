import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import styles from "../../../../styles/profile.module.scss";
import useSWR from "swr";
import profileService, { UserParams } from "@/src/services/profileService";
import { FormEvent, useEffect, useState } from "react";
import ToastComponent from "../../common/Toast";
import { useRouter } from "next/router";

const UserForm = () => {
  const router = useRouter();

  // Form states
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [previousEmail, setPreviousEmail] = useState(email);
  const [createdAt, setCreatedAt] = useState("");
  // Toast states
  const [color, setColor] = useState("");
  const [toastIsOpen, setToastIsOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const date = new Date(createdAt);
  const day = date.getDate();
  const month = date.toLocaleDateString("default", { month: "long" });
  const year = date.getFullYear();

  useEffect(() => {
    profileService.getCurrentUser().then((user) => {
      setFirstName(user.firstName);
      setLastName(user.lastName);
      setPhone(user.phone);
      setEmail(user.email);
      setCreatedAt(user.createdAt);
    });
  }, []);

  const handleUserUpdate = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const params: UserParams = { firstName, lastName, phone, email, createdAt };
    const res = await profileService.updateUser(params);

    if (res === 200) {
      setToastIsOpen(true);
      setErrorMessage("Profile updated successfuly");
      setColor("bg-success");
      setTimeout(() => setToastIsOpen(false), 1000 * 4);
      if (previousEmail != email) {
        sessionStorage.removeItem("streamMe-token");
        localStorage.removeItem("streamMe-token");
        router.push("/");
      }
    } else {
      setToastIsOpen(true);
      setErrorMessage("Error trying to update profile");
      setColor("bg-danger");
      setTimeout(() => setToastIsOpen(false), 1000 * 4);
    }
  };

  return (
    <>
      <Form onSubmit={handleUserUpdate}>
        <div className={styles.formName}>
          <p className={styles.nameAbbreviation}>
            {`${firstName.charAt(0)}${lastName.charAt(0)}`}
          </p>
          <p className={styles.userName}>{`${firstName} ${lastName}`}</p>
        </div>
        <div className={styles.memberTime}>
          <img
            src="/favicon.svg"
            alt="Icon Profile"
            className={styles.memberTimeImg}
          />
          <p className={styles.memberTimeText}>
            Member since <br /> {`${month} ${day} of ${year}`}
          </p>
        </div>
        <hr />
        <div className={styles.inputFlexDiv}>
          <FormGroup>
            <Label className={styles.label} for="firstName">
              FIRST NAME
            </Label>
            <Input
              id="firstName"
              name="firstName"
              type="text"
              placeholder="Insert your first name"
              required
              maxLength={20}
              className={styles.inputFlex}
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label className={styles.label} for="lastName">
              LAST NAME
            </Label>
            <Input
              id="lastName"
              name="lastName"
              type="text"
              placeholder="Insert your last name"
              required
              maxLength={20}
              className={styles.inputFlex}
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
            />
          </FormGroup>
        </div>

        <div className={styles.inputNormalDiv}>
          <FormGroup>
            <Label className={styles.label} for="phone">
              PHONE
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="(xx) 9xxxx-xxxx"
              required
              className={styles.input}
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label className={styles.label} for="email">
              EMAIL
            </Label>
            <Input
              name="email"
              type="email"
              id="email"
              placeholder="Insert your email"
              required
              className={styles.input}
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </FormGroup>
          <Button type="submit" outline className={styles.formBtn}>
            Save Changes
          </Button>
        </div>
      </Form>
      <ToastComponent
        isOpen={toastIsOpen}
        message={errorMessage}
        color={color}
      />
    </>
  );
};

export default UserForm;
