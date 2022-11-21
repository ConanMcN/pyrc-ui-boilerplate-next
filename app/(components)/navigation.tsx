import Link from "next/link";

import styles from "./styles.module.scss";
import { ROUTES } from "types";

const exampleNavItems = [
  {
    label: "Home",
    path: ROUTES.HOME,
  },
  {
    label: "Articles",
    path: ROUTES.ARTICLE,
  },
  {
    label: "Insights",
    path: ROUTES.HOME,
  },
  {
    label: "Admin",
    path: ROUTES.HOME,
  },
  {
    label: "Settings",
    path: ROUTES.HOME,
  },
];

export function Navigation() {
  return (
    <nav className={styles.navigation}>
      <ul>
        {exampleNavItems.map(({ label, path }) => (
          <li key={label}>
            <Link href={path}>{label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
