import React from "react";
import ContactButton from "../../general/ContactButton";
import Elements from "../../general/Elements";
import styles from "./styles.module.css";

const WhyChooseUs = ({ data, contact }) => {
  return (
    <section>
      <h2>{data.title}</h2>
      <Elements elements={data.elements} />
      <ContactButton data={contact} />
    </section>
  );
};

export default WhyChooseUs;
