import React from "react";
import ContactButton from "../../general/ContactButton";
import Container from "../../general/Container";

const Help = ({ data, contact }) => {
  return (
    <Container className="bg-secondary px-10 text-white py-16">
      <h2 className="text-3xl lg:text-5xl text-center font-extrabold mb-10">{data.title}</h2>
      <ContactButton data={contact} />
    </Container>
  );
};

export default Help;