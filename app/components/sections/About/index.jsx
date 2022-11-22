import React from "react";
import Container from "../../general/Container";
import Divider from "../../general/Divider";
import Elements from "../../general/Elements";

const About = ({ data }) => {
  return (
    <Container className="bg-primary py-16 lg:py-24 text-white">
      <div className="w-10/12 lg:w-9/12">
        <h2 className="text-2xl lg:text-6xl font-extrabold">{data.title}</h2>
        <Divider />
        <Elements elements={data.elements} />
      </div>
    </Container>
  );
};

export default About;
