import { Container } from "reactstrap";
import styles from "./styles.module.scss";

const Footer = () => {
  return (
    <>
      <Container className={styles.footerCtn}>
        <div className={styles.iconsCta}>
          <FooterIcon
            src="/icons/github.svg"
            alt="Git Hub"
            link="https://github.com/mbfontana"
          />
          <FooterIcon
            src="/icons/linkedin.svg"
            alt="LinkedIn"
            link="https://www.linkedin.com/in/matheusfontana/"
          />
          <FooterIcon
            src="/icons/email.svg"
            alt="E-mail"
            link="mailto:mbfontana@outlook.com"
          />
        </div>
        
        <p className={styles.footerHeadline}>© Developed by Matheus Fontana</p>
      </Container>
    </>
  );
};

export default Footer;

type FooterIconProps = {
  src: string;
  alt: string;
  link: string;
};

const FooterIcon = ({ src, alt, link }: FooterIconProps) => {
  return (
    <a href={link} target="_blank">
      <img src={src} alt={alt} className={styles.footerIcon} />
    </a>
  );
};
