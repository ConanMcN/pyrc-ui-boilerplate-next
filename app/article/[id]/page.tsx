import Link from "next/link";
import { Button, Text } from "@payroc/react";
import { ROUTES } from "types";

type PageProps = {
  params: {
    id: string | number;
  };
};

export default function ArticleIdPage({ params }: PageProps) {
  return (
    <>
      <Text variant="h1">Article {params.id}</Text>

      <Text>
        Qui ad est dolor occaecat esse magna nisi irure dolore aliquip commodo
        cillum culpa. Labore ad cupidatat quis sit consectetur eiusmod magna
        incididunt amet. Nisi velit laborum aliquip nulla elit tempor nulla
        irure ex cupidatat elit. Id sunt quis ad exercitation aliqua aliqua
        labore culpa cupidatat consectetur incididunt ipsum. Deserunt ut commodo
        ipsum commodo ex sit labore aute.
      </Text>

      <Link href={ROUTES.ARTICLE}>
        <Button color="primary">Back to Articles</Button>
      </Link>
    </>
  );
}
