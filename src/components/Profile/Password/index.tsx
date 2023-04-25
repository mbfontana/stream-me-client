import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import styles from "../../../../styles/profile.module.scss";
import { FormEvent, useEffect, useState } from "react";
import profileService from "@/src/services/profileService";
import ToastComponent from "../../common/Toast";

const PasswordForm = () => {
  // Form States
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  // Toast states
  const [color, setColor] = useState("");
  const [toastIsOpen, setToastIsOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    profileService.getCurrentUser().then((password) => {
      setCurrentPassword(password.currentPassword);
      setNewPassword(password.newPassword);
    });
  }, []);

  const handlePasswordChange = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (newPassword !== confirmPassword) {
      setToastIsOpen(true);
      setColor("bg-danger");
      setErrorMessage("Passwords don't match");
      setTimeout(() => setToastIsOpen(false), 1000 * 4);
      return;
    }
    if (newPassword === currentPassword) {
      setToastIsOpen(true);
      setColor("bg-danger");
      setErrorMessage("New password must differ from current password");
      setTimeout(() => setToastIsOpen(false), 1000 * 4);
      return;
    }

    const res = await profileService.updatePassword({
      currentPassword,
      newPassword,
    });

    if (res === 204) {
      setToastIsOpen(true);
      setColor("bg-success");
      setErrorMessage("Password altered successfuly");
      setTimeout(() => setToastIsOpen(false), 1000 * 4);

      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
    }
    if (res === 400) {
      setToastIsOpen(true);
      setColor("bg-danger");
      setErrorMessage("Incorrect current password");
      setTimeout(() => setToastIsOpen(false), 1000 * 4);
    }
  };

  return (
    <>
      <Form onSubmit={handlePasswordChange} className={styles.form}>
        <div className={styles.inputNormalDiv}>
          <FormGroup>
            <Label for="currentPassword">CURRENT PASSWORD</Label>
            <Input
              id="currentPassword"
              name="currentPassword"
              type="password"
              placeholder="********"
              minLength={6}
              maxLength={12}
              required
              onChange={(event) => setCurrentPassword(event.target.value)}
              className={styles.input}
            />
          </FormGroup>
          <div className={styles.inputFlexDiv}>
            <FormGroup>
              <Label for="newPassword" className={styles.label}>
                NEW PASSWORD
              </Label>
              <Input
                id="newPassword"
                name="newPassword"
                type="password"
                placeholder="********"
                minLength={6}
                maxLength={12}
                required
                onChange={(event) => setNewPassword(event.target.value)}
                className={styles.inputFlex}
              />
            </FormGroup>
            <FormGroup>
              <Label for="confirmPassword" className={styles.label}>
                CONFIRM NEW PASSWORD
              </Label>
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="********"
                minLength={6}
                maxLength={12}
                required
                onChange={(event) => setConfirmPassword(event.target.value)}
                className={styles.inputFlex}
              />
            </FormGroup>
          </div>
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

export default PasswordForm;
