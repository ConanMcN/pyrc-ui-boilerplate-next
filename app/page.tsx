import Link from "next/link";
import { ROUTES } from "../types";

/**
 *
 * This serves as the landing page of the website as it
 * is the root level "page.tsx" file.
 */
export default function Page() {
  return (
    <>
      <h1>Payroc UI Boilerplate</h1>
      <p>
        This is the landing page of the website. Try some navigation by clicking
        the button below
      </p>
      <Link href={ROUTES.ARTICLE}>
        <button>Go to Articles</button>
      </Link>
    </>
  );
}
