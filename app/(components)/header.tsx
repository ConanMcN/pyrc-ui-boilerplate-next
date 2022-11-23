// "use client";

import { Dispatch, SetStateAction } from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import Logo from "assets/logo-light.png";
import styles from "./styles.module.scss";
import { ROUTES } from "types";

type HeaderProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export function Header({ isOpen, setIsOpen }: HeaderProps) {
  return (
    <header className={styles.header}>
      <Link href={ROUTES.HOME}>
        <Image src={Logo} alt="Logo" width={147} />
      </Link>

      <div className={styles["mobile-menu"]} onClick={() => setIsOpen(!isOpen)}>
        <FontAwesomeIcon icon={faBars} width={16} color="white" />
      </div>
    </header>
  );
}
