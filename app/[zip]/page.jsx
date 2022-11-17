import { getPageData } from "../api";
import PageStructure from "../components/PageStructure";

export const generateStaticParams = async () => {
  const {
    zips: { items },
  } = await getPageData({ type: "home" });
  return items.map((zip) => ({ zip: zip.name }));
};

export const dynamicParams = false;

const Page = async ({ params }) => {
  const data = await getPageData({ type: "zip", zip: params.zip });
  return <PageStructure data={data} />;
};

export default Page;
