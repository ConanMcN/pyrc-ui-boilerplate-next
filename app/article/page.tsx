import Link from "next/link";
import { ROUTES } from "types";

export default function ArticlePage() {
  return (
    <>
      <h1>Articles</h1>
      <p>
        Qui ad est dolor occaecat esse magna nisi irure dolore aliquip commodo
        cillum culpa. Labore ad cupidatat quis sit consectetur eiusmod magna
        incididunt amet.
      </p>

      <Link href={ROUTES.ARTICLE + "/1"}>Article 1</Link>
      <Link href={ROUTES.ARTICLE + "/2"}>Article 2</Link>
      <Link href={ROUTES.ARTICLE + "/3"}>Article 3</Link>

      <Link href={ROUTES.HOME} style={{ marginTop: "1rem" }}>
        <button>Back to Homepage</button>
      </Link>
    </>
  );
}
