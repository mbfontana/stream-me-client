import { Spinner } from "reactstrap";
import styles from "./styles.module.scss";

const LoadingSpinner = () => {
  return (
    <div className={styles.background}>
      <Spinner animation="border" variant="light" />
    </div>
  );
};

export default LoadingSpinner;
