import styles from "./styles.module.scss";

function Button({ buttonType, buttonText, linkTo }) {
  return (
    <Link href={linkTo} passHref>
      <a className={`button ${styles.buttonType}`}>{buttonText}</a>
    </Link>
  );
}

export default Button;
