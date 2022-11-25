"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "@payroc/react/build/index.css";

import styles from "./styles.module.scss";
import "styles/globals.scss";
import { Header, Footer, Navigation } from "./(components)";

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  const path = usePathname();
  const [isDesktopMenuOpen, setIsDesktopMenuOpen] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [path]);

  return (
    <html lang="en">
      <body>
        <div
          className={`${styles["root-layout"]} ${
            !isDesktopMenuOpen ? styles["menu-closed"] : ""
          }`}
        >
          <Header isOpen={isMobileMenuOpen} setIsOpen={setIsMobileMenuOpen} />

          <Navigation
            isDesktopMenuOpen={isDesktopMenuOpen}
            isMobileMenuOpen={isMobileMenuOpen}
            setIsOpen={setIsDesktopMenuOpen}
          />

          <main className={styles["main-content"]}>
            {children}
            <Footer />
          </main>
        </div>
      </body>
    </html>
  );
}
