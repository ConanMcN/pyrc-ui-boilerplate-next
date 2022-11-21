import Image from "next/image";
import Link from "next/link";

import Logo from "assets/logo-light.png";
import styles from "./styles.module.scss";

import { ROUTES } from "types";

export function Header() {
  return (
    <header className={styles.header}>
      <Link href={ROUTES.HOME}>
        <Image src={Logo} alt="Logo" width={147} />
      </Link>
    </header>
  );
}
