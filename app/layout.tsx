import styles from "./styles.module.scss";
import "styles/globals.scss";

import { Header, Footer, Navigation } from "./(components)";

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <div className={styles["root-layout"]}>
          <Header />

          <Navigation />

          <main className={styles["main-content"]}>
            {children}
            <Footer />
          </main>
        </div>
      </body>
    </html>
  );
}
