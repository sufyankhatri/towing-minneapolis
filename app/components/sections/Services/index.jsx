import React from "react";
import ContactButton from "../../general/ContactButton";
import Container from "../../general/Container";

const Services = ({ data, contact }) => {
  return (
    <Container className="bg-cta py-16 lg:py-24">
      <h2 className="text-white text-2xl lg:text-6xl mb-10 font-extrabold text-center">
        {data.title}
      </h2>
      <ContactButton data={contact} />
    </Container>
  );
};

export default Services;
