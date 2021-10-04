import Button from "../../elements/Button";
import NavBar from "../../elements/NavBar";
import styles from "./styles.module.scss";

function Header() {
  return (
    <header className={styles.header}>
      <NavBar />

      <h1>A modern publishing platform</h1>
      <p className={styles.mainSubtitle}>
        Grow your audience and build your online brand
      </p>
      <div className={styles.ctaButtons}>
        <Button
          buttonType="primaryCTA"
          buttonText="Start for Free"
          linkTo="#"
        />
        <Button buttonType="secondaryCTA" buttonText="Learn More" linkTo="#" />
      </div>
    </header>
  );
}

export default Header;
