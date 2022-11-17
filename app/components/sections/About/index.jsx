import React from "react";
import ContactButton from "../../general/ContactButton";
import Elements from "../../general/Elements";
import styles from "./styles.module.css";

const About = ({ data }) => {
  return (
    <section>
      <h2>{data.title}</h2>
      <Elements elements={data.elements} />
    </section>
  );
};

export default About;
