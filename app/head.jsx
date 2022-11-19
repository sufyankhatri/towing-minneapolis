import { getPageData } from "./api";

export default async function Head() {
  const data = await getPageData({ type: "home" });

  return (
    <>
      <title>{data.header.meta.title}</title>
      <meta name="description" content={data.header.meta.description} />
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <link rel="icon" href="/favicon.ico" />
    </>
  );
}
