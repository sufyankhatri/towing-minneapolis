import React from "react";
import CallLink from "../../general/CallLink";
import ContactButton from "../../general/ContactButton";
import styles from "./styles.module.css";

const Banner = ({ data, contact }) => {
  return (
    <section>
      <p>{data.tagline}</p>
      <h1>{data.header}</h1>
      <ul>
        {data.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <ContactButton data={contact} />
    </section>
  );
};

export default Banner;
