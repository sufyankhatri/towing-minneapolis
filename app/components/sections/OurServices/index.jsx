import Link from "next/link";
import React from "react";
import styles from "./styles.module.css";

const OurServices = ({ data, params }) => {
  return (
    <section>
      <h2>{data.title}</h2>
      <ul>
        {data.items.map((item, index) => (
          <li key={index}>
            <Link href={item.href}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default OurServices;
