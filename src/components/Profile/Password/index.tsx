import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import styles from "../../../../styles/profile.module.scss";

const PasswordForm = () => {
  return (
    <>
      <Form className={styles.form}>
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
                className={styles.inputFlex}
              />
            </FormGroup>
            <FormGroup>
              <Label for="confirmNewPassword" className={styles.label}>
                CONFIRM NEW PASSWORD
              </Label>
              <Input
                id="confirmNewPassword"
                name="confirmNewPassword"
                type="password"
                placeholder="********"
                minLength={6}
                maxLength={12}
                required
                className={styles.inputFlex}
              />
            </FormGroup>
          </div>
          <Button type="submit" outline className={styles.formBtn}>
            Save Changes
          </Button>
        </div>
      </Form>
    </>
  );
};

export default PasswordForm;
