import React from "react";
import ContactButton from "../../general/ContactButton";
import Container from "../../general/Container";
import Divider from "../../general/Divider";
import Elements from "../../general/Elements";

const WhyChooseUs = ({ data, contact }) => {
  return (
    <Container className="py-16 lg:py-20 bg-secondary text-white">
      <div className="w-10/12 lg:w-9/12 lg:text-lg">
        <h1 className="text-3xl uppercase lg:text-6xl font-extrabold">
          {data.title}
        </h1>
        <Divider />
        <Elements elements={data.elements} />
        <div className="flex justify-center mt-10">
          <ContactButton data={contact} />
        </div>
      </div>
    </Container>
  );
};

export default WhyChooseUs;
