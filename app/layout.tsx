"use client";

import { useState } from "react";

import styles from "./styles.module.scss";
import "styles/globals.scss";
import { Header, Footer, Navigation } from "./(components)";

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  function handleExpandOnClick() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <html lang="en">
      <body>
        <div
          className={`${styles["root-layout"]} ${
            !isMenuOpen ? styles["menu-closed"] : ""
          }`}
        >
          <Header />

          <Navigation isOpen={isMenuOpen} setIsOpen={handleExpandOnClick} />

          <main className={styles["main-content"]}>
            {children}
            <Footer />
          </main>
        </div>
      </body>
    </html>
  );
}
