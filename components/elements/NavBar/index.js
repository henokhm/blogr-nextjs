import styles from "./styles.module.scss";
import NavMenuItem from "../NavMenuItem";
import Button from "../Button";

const navigationMenuData = [
  {
    id: 1,
    text: "Product",
    menuItems: [
      { id: 11, text: "Overview", linkTo: "#" },
      { id: 12, text: "Pricing", linkTo: "#" },
      { id: 13, text: "Marketplace", linkTo: "#" },
      { id: 14, text: "Features", linkTo: "#" },
      { id: 15, text: "Integrations", linkTo: "#" },
    ],
  },
  {
    id: 2,
    text: "Company",

    menuItems: [
      { id: 21, text: "About", linkTo: "#" },
      { id: 22, text: "Team", linkTo: "#" },
      { id: 23, text: "Blog", linkTo: "#" },
      { id: 24, text: "Careers", linkTo: "#" },
    ],
  },

  {
    id: 3,
    text: "Connect",
    menuItems: [
      { id: 31, text: "Contact", linkTo: "#" },
      { id: 32, text: "Newsletter", linkTo: "#" },
      { id: 33, text: "LinkedIn", linkTo: "#" },
    ],
  },
];

function NavBar() {
  return (
    <nav className={styles.navBar}>
      <img className={styles.logo} src="/images/logo.svg" alt="logo" />
      <img
        className={styles.hamburger}
        src="/images/icon-hamburger.svg"
        alt="hamburger menu"
      />
      <ul>
        {navigationMenuData.map((item) => {
          return <NavMenuItem key={item.id} item={item} />;
        })}
        <Button buttonType="login" buttonText="Log In" linkTo="#" />
        <Button buttonType="primaryCTA" buttonText="Sign Up" linkTo="#" />
      </ul>
    </nav>
  );
}

export default NavBar;
