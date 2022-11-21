import Link from "next/link";
import { ROUTES } from "types";

/**
 *
 * Global 404 page not yet available in current Next.js version :(
 */
export default function NotFound() {
  return (
    <div>
      <p>Something went wrong!</p>
      <Link href={ROUTES.ARTICLE}>
        <button>Back to homepage</button>
      </Link>
    </div>
  );
}
