import { getPageData } from "../api";
import PageStructure from "../components/PageStructure";

export const dynamicParams = true;

const Page = async ({ params }) => {
  try {
    const { routes } = params;
    let requestParams = {};

    if (routes.length === 1) {
      const [route] = routes;
      if (/\d/.test(route)) {
        requestParams.type = "zip";
        requestParams.zip = route;
      } else {
        requestParams.type = "service";
        requestParams.service = route;
      }
    } else if (routes.length === 2) {
      const [zip, service] = routes;
      requestParams.type = "zip";
      requestParams.zip = zip;
      requestParams.service = service;
    } else {
      return <h1>404 NOT FOUND</h1>;
    }
    const data = await getPageData(requestParams);
    return <PageStructure data={data} params={params} />;
  } catch (err) {
    return <h1>404 NOT FOUND</h1>;
  }
};

export default Page;
