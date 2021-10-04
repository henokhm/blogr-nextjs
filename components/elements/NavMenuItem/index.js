import Link from "next/link";

import styles from "./styles.module.scss";

function NavMenuItem(props) {
  const { text, menuItems } = props.item;

  return (
    <li className={styles.navMenuItem}>
      <span>{text}</span>
      <img
        className={styles.chevron}
        src="/images/icon-arrow-light.svg"
        alt="logo"
      />
      <ul className={styles.subMenu}>
        {menuItems.map((menuItem) => (
          <li key={menuItem.id}>
            <Link href={menuItem.linkTo} passHref>
              <a>{menuItem.text}</a>
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
}

export default NavMenuItem;
