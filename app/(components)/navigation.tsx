"use client";

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
import "@fortawesome/fontawesome-svg-core/styles.css";

import styles from "./styles.module.scss";
import { ROUTES } from "types";
import { Chevron } from "assets/icons";

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
  isOpen: boolean;
  setIsOpen: () => void;
};

export function Navigation({ isOpen, setIsOpen }: NavigationProps) {
  return (
    <nav className={styles.navigation}>
      <ul>
        {exampleNavItems.map(({ label, path, icon }) => (
          <li key={label}>
            <Link href={path}>
              {icon}
              {isOpen && <span>{label}</span>}
            </Link>
          </li>
        ))}

        <li
          className={`${styles["navigation-expand"]} ${
            !isOpen ? styles["menu-closed"] : ""
          }`}
          onClick={setIsOpen}
        >
          <FontAwesomeIcon icon={faAngleDoubleLeft} width={16} />
          {/* {isOpen && <span>Collapse Menu</span>} */}
        </li>
      </ul>
    </nav>
  );
}
