import Link from "next/link";
import { Button, Text } from "@payroc/react";
import { ROUTES } from "../types";

/**
 *
 * This serves as the landing page of the website as it
 * is the root level "page.tsx" file.
 */
export default function Page() {
  return (
    <>
      <Text variant="h1">Payroc UI Boilerplate</Text>
      <Text>
        This is the landing page of the website. Try some navigation by clicking
        the button below
      </Text>
      <Link href={ROUTES.ARTICLE}>
        <Button color="primary">Go to Articles</Button>
      </Link>
    </>
  );
}
