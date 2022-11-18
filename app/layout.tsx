import Image from "next/image";
import Link from "next/link";

import Logo from "../assets/logo.webp";
import styles from "./styles.module.scss";
import "../styles/globals.scss";

import { ROUTES } from "../types";

type RootLayoutProps = {
  children: React.ReactNode;
};

const exampleNavItems = [
  {
    label: "Home",
    path: ROUTES.HOME,
  },
  {
    label: "Profile",
    path: ROUTES.PROFILE,
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

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <div className={styles["root-layout"]}>
          <header className={styles.header}>
            <Link href={ROUTES.HOME}>
              <Image src={Logo} alt="Logo" width={50} />
            </Link>
          </header>

          <nav className={styles.navigation}>
            <ul>
              {exampleNavItems.map(({ label, path }) => (
                <li key={path}>
                  <Link href={path}>{label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <main className={styles["main-content"]}>{children}</main>
        </div>
      </body>
    </html>
  );
}
