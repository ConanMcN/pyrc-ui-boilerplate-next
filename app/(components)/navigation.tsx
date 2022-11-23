"use client";

import { Dispatch, SetStateAction } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookOpen,
  faChartPie,
  faCog,
  faDatabase,
  faHome,
  faAngleDoubleLeft,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./styles.module.scss";
import { ROUTES } from "types";
import { useWindowSize } from "hooks";

const exampleNavItems = [
  {
    label: "Home",
    path: ROUTES.HOME,
    icon: <FontAwesomeIcon icon={faHome} width={16} />,
  },
  {
    label: "Articles",
    path: ROUTES.ARTICLE,
    icon: <FontAwesomeIcon icon={faBookOpen} width={16} />,
  },
  {
    label: "Insights",
    path: ROUTES.HOME,
    icon: <FontAwesomeIcon icon={faChartPie} width={16} />,
  },
  {
    label: "Admin",
    path: ROUTES.HOME,
    icon: <FontAwesomeIcon icon={faDatabase} width={16} />,
  },
  {
    label: "Settings",
    path: ROUTES.HOME,
    icon: <FontAwesomeIcon icon={faCog} width={16} />,
  },
];

type NavigationProps = {
  isDesktopMenuOpen: boolean;
  isMobileMenuOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export function Navigation({
  isDesktopMenuOpen,
  isMobileMenuOpen,
  setIsOpen,
}: NavigationProps) {
  const { isMobile } = useWindowSize();

  return (
    <nav
      className={`${styles.navigation} ${
        !isMobileMenuOpen ? styles["navigation--closed"] : ""
      }`}
    >
      <ul>
        {exampleNavItems.map(({ label, path, icon }) => (
          <li key={label}>
            <Link href={path}>
              {icon}
              {(isDesktopMenuOpen || isMobile) && <span>{label}</span>}
            </Link>
          </li>
        ))}

        {!isMobile && (
          <li
            className={`${styles["navigation--expanded"]} ${
              !isDesktopMenuOpen ? styles["navigation--collapsed"] : ""
            }`}
            onClick={() => setIsOpen(!isDesktopMenuOpen)}
          >
            <FontAwesomeIcon icon={faAngleDoubleLeft} width={16} />
          </li>
        )}
      </ul>
    </nav>
  );
}
