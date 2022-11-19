import Script from "next/script";
import { getPageData } from "./api";

export default async function Head() {
  const data = await getPageData({ type: "home" });

  return (
    <>
      <title>{data.header.meta.title}</title>
      <meta name="description" content={data.header.meta.description} />
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <link rel="icon" href="/favicon.ico" />
      {/* {data.header.schemas.map((item, i) => {
        return Object.entries(item).map(([className, schema], j) => {
          if (!schema) return <></>;
          return (
            <script
              async=""
              key={i + j}
              type="application/ld+json"
              className={className}
              dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
          );
        });
      })} */}
    </>
  );
}
