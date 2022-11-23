import Link from "next/link";
import { Button, Text } from "@payroc/react";
import { ROUTES } from "types";

export default function ArticlePage() {
  return (
    <>
      <Text variant="h1">Articles</Text>
      <Text>
        Qui ad est dolor occaecat esse magna nisi irure dolore aliquip commodo
        cillum culpa. Labore ad cupidatat quis sit consectetur eiusmod magna
        incididunt amet.
      </Text>

      <Text>
        <Link href={ROUTES.ARTICLE + "/1"}>Article 1</Link>
      </Text>

      <Text>
        <Link href={ROUTES.ARTICLE + "/2"}>Article 2</Link>
      </Text>

      <Text>
        <Link href={ROUTES.ARTICLE + "/3"}>Article 3</Link>
      </Text>

      <Link href={ROUTES.HOME}>
        <Button color="primary">Back to Homepage</Button>
      </Link>
    </>
  );
}
