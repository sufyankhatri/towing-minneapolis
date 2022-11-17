import { getPageData } from "./api";
import PageStructure from "./components/PageStructure";

const Page = async () => {
  const data = await getPageData({ type: "home" });
  return <PageStructure data={data} />;
};

export default Page;
