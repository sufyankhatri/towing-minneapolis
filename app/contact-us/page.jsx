import Head from "next/head";
import { getPageData } from "../api";
import Banner from "../components/sections/Banner";
import CallBack from "../components/sections/CallBack";
import Navbar from "../components/sections/Navbar";

const Page = async () => {
  const data = await getPageData({ type: "contact" });
  console.log(data);
  return (
    <>
      <header>
        {/* BACKGROUND IMAGE */}
        <Navbar data={data.header.navbar} contact={data.contact} />
        <Banner data={data.header.banner} contact={data.contact} />
      </header>
      <main>
        <CallBack data={data.form} />
      </main>
      {/* {data.header.schemas.map((item, i) =>
    Object.entries(item).map(([className, schema], j) => (
      <script key={i + j} type="application/ld+json" className={className}>
        {schema}
      </script>
    ))
  )} */}
    </>
  );
};

export default Page;
