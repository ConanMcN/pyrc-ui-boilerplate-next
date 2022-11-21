import Image from "next/image";
import Link from "next/link";
import { ROUTES } from "types";

import Logo from "assets/logo-dark.png";
import styles from "./styles.module.scss";

const exampleFooterItems = [
  {
    label: "Sales",
    links: [
      {
        label: "(888) 477-4500",
        path: "tel:(888) 477-4500",
      },
      {
        label: "sales@payroc.com",
        path: "mailto:sales@payroc.com",
      },
    ],
  },
  {
    label: "Support",
    links: [
      {
        label: "(888) 477-4510",
        path: "tel:(888) 477-4510",
      },
      {
        label: "support@payroc.com",
        path: "mailto:support@payroc.com",
      },
    ],
  },
  {
    label: "Legal",
    links: [
      {
        label: "Privacy Policy",
        path: ROUTES.HOME,
      },
      {
        label: "Merchant Terms and Conditions",
        path: ROUTES.HOME,
      },
    ],
  },
];

export function Footer() {
  return (
    <footer className={styles.footer}>
      <ul>
        <li>
          <Image src={Logo} alt="Payroc" width={147} />
        </li>

        {exampleFooterItems.map(({ label, links }) => (
          <li key={label}>
            <p>{label}</p>
            {links.map(({ label: childLabel, path }) => (
              <Link key={childLabel} href={path}>
                {childLabel}
              </Link>
            ))}
          </li>
        ))}
      </ul>
    </footer>
  );
}
