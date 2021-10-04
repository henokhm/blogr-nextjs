import styles from "./styles.module.scss";

function ButtonPrimaryCta({ text, linkTo }) {
  return (
    <button className={styles.button_primary_cta} href={linkTo}>
      {text}
    </button>
  );
}

export default ButtonPrimaryCta;
