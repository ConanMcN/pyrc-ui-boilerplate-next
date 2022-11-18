import Link from "next/link";
import { ROUTES } from "../../types";

/**
 *
 * This serves as the landing page of the website as it
 * is the root level "page.tsx" file.
 */
export default function ProfilePage() {
  return (
    <>
      <h1>Profile Page</h1>
      <p>
        Qui ad est dolor occaecat esse magna nisi irure dolore aliquip commodo
        cillum culpa. Labore ad cupidatat quis sit consectetur eiusmod magna
        incididunt amet. Nisi velit laborum aliquip nulla elit tempor nulla
        irure ex cupidatat elit. Id sunt quis ad exercitation aliqua aliqua
        labore culpa cupidatat consectetur incididunt ipsum. Deserunt ut commodo
        ipsum commodo ex sit labore aute.
      </p>
      <Link href={ROUTES.HOME}>
        <button>Back to Homepage</button>
      </Link>
    </>
  );
}
