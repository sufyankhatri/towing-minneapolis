import Link from "next/link";
import React from "react";
import styles from "./styles.module.css";

const AllServices = ({ data }) => {
  return (
    <section>
      <h2>{data.title}</h2>
      <ul>
        {data.items.map((item, index) => (
          <li key={index}>
            <Link href={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default AllServices;
