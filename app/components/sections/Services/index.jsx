import React from "react";
import ContactButton from "../../general/ContactButton";
import styles from "./styles.module.css";

const Services = ({ data, contact }) => {
  return (
    <section>
      <h2>{data.title}</h2>
      <ContactButton data={contact} />
    </section>
  );
};

export default Services;
