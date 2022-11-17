import { getPageData } from "../../api";
import PageStructure from "../../components/PageStructure";

export const generateStaticParams = async () => {
  const {
    allServices: { items },
  } = await getPageData({ type: "home" });
  return items.map((service) => ({ service: service.name }));
};

export const dynamicParams = false;

const Page = async ({ params }) => {
  const data = await getPageData({ type: "service", service: params.service });
  return <PageStructure data={data} />;
};

export default Page;
