// import data from "../home.json" assert { type: "json" };
import "../styles/globals.css";
import Banner from "./components/sections/Banner";
import Navbar from "./components/sections/Navbar";
import WhyChooseUs from "./components/sections/WhyChooseUs";
import Map from "./components/sections/Map";
import ZipCodes from "./components/sections/ZipCodes";
import OurServices from "./components/sections/OurServices";
import About from "./components/sections/About";
import AllServices from "./components/sections/AllServices";
import Reviews from "./components/sections/Reviews";
import CallBack from "./components/sections/CallBack";
import Help from "./components/sections/Help";
import axios from "axios";
import Services from "./components/sections/Services";
import Footer from "./components/sections/Footer";

const getData = async () => {
  const response = await axios.get("https://apicms.ecommcube.com/api/site", {
    data: {
      domain: "towingminneapolis.vercel.com",
      type: "home",
    },
  });
  return response.data;
};

const Page = async () => {
  const data = await getData();

  return (
    <>
      {/* BACKGROUND IMAGE */}
      <Navbar data={data.header.navbar} contact={data.contact} />
      <Banner data={data.header.banner} contact={data.contact} />

      <main>
        <WhyChooseUs data={data.whyChooseUs} contact={data.contact} />
        <div className="grid lg:grid-cols-2">
          <Map />
          <ZipCodes data={data.zips} />
        </div>
        <OurServices data={data.ourServices} />
        <About data={data.about} />
        <Services data={data.services} contact={data.contact} />
        <AllServices data={data.allServices} />
        <Reviews data={data.reviews} />
        <Help data={data.help} contact={data.contact} />
        <CallBack data={data.form} />
      </main>
      <Footer
        data={data.footer}
        contact={data.contact}
        brand={data.header.navbar.brand}
      />
    </>
  );
};

export default Page;