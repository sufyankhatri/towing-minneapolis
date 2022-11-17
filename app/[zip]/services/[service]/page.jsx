import { getPageData } from "../../../api";
import PageStructure from "../../../components/PageStructure";

export const generateStaticParams = async () => {
  const {
    zips: { items },
  } = await getPageData({ type: "home" });

  const paths = [];

  for (const zip of items) {
    const {
      allServices: { items },
    } = await getPageData({ type: "zip", zip: zip.name });

    for (const service of items) {
      paths.push({ zip: zip.name, service: service.name });
    }
  }

  return paths;
};

export const dynamicParams = false;

const Page = async ({ params }) => {
  const data = await getPageData({
    type: "service",
    zip: params.zip,
    service: params.service,
  });
  return <PageStructure data={data} />;
};

export default Page;
