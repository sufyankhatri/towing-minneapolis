import Head from "next/head";
import Script from "next/script";
import React from "react";
import About from "../sections/About";
import AllServices from "../sections/AllServices";
import Banner from "../sections/Banner";
import CallBack from "../sections/CallBack";
import Footer from "../sections/Footer";
import Help from "../sections/Help";
import Map from "../sections/Map";
import Navbar from "../sections/Navbar";
import OurServices from "../sections/OurServices";
import Reviews from "../sections/Reviews";
import Services from "../sections/Services";
import WhyChooseUs from "../sections/WhyChooseUs";
import ZipCodes from "../sections/ZipCodes";

const PageStructure = ({ data, params }) => {
  return (
    <>
      <header>
        {/* BACKGROUND IMAGE */}
        <Navbar data={data.header.navbar} contact={data.contact} />
        <Banner data={data.header.banner} contact={data.contact} />
      </header>
      <main>
        <WhyChooseUs data={data.whyChooseUs} contact={data.contact} />
        <div>
          <Map />
          <ZipCodes data={data.zips} />
        </div>
        <OurServices data={data.ourServices} params={params} />
        <About data={data.about} />
        <Services data={data.services} contact={data.contact} />
        <AllServices data={data.allServices} params={params} />
        <Reviews data={data.reviews} />
        <CallBack data={data.form} />
        <Help data={data.help} contact={data.contact} />
      </main>
      <footer>
        <Footer
          data={data.footer}
          contact={data.contact}
          brand={data.header.navbar.brand}
          params={params}
        />
      </footer>
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

export default PageStructure;
