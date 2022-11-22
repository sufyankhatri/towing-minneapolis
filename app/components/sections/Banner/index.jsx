import React from "react";
import ContactButton from "../../general/ContactButton";
import Container from "../../general/Container";

export default function index({ data, contact }) {
  return (
    <Container className="min-h-screen bg-banner pb-16 text-white">
      <div className="w-10/12 lg:w-9/12">
        <div className="mt-12">
          <ContactButton data={contact} />
        </div>
        <div className="mt-10 lg:text-left text-center">
          <h1 className="lg:text-2xl font-extrabold uppercase">{data.tagline}</h1>
          <h1 className="text-3xl lg:text-5xl mt-3 font-extrabold">
            {data.header}
          </h1>
        </div>
        <div className="w-full grid lg:grid-cols-2 gap-3 mt-10">
          {data.items.map((item, index) => (
            <div
              key={index}
              className="flex items-center text-sm lg:text-base space-x-2 lg:space-x-3"
            >
              <img
                src="/img/right-arrow-icn.png"
                className="h-7 lg:h-10"
                alt=""
              />
              <h1>{item}</h1>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
