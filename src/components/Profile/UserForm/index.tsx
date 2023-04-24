import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import styles from "../../../../styles/profile.module.scss";

const UserForm = () => {
  return (
    <Form>
      <div className={styles.formName}>
        <p className={styles.nameAbbreviation}>NT</p>
        <p className={styles.userName}>NAME TEST</p>
      </div>
      <div className={styles.memberTime}>
        <img
          src="/profile/iconUserAccount.svg"
          alt="iconProfile"
          className={styles.memberTimeImg}
        />
        <p className={styles.memberTimeText}>
          Membro desde <br /> 20 de Abril de 2020
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
            value={"First Name"}
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
            value={"Last Name"}
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
            value={"+55 (21) 99999-9999"}
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
            value={"testeemail@gmail.com"}
          />
        </FormGroup>
        <Button outline className={styles.formBtn}>
          Save Changes
        </Button>
      </div>
    </Form>
  );
};

export default UserForm;
