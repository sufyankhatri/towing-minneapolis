import Link from "next/link";
import React from "react";
import styles from "./styles.module.css";

const ZipCodes = ({ data }) => {
  return (
    <section>
      <h2>{data.title}</h2>
      <ul>
        {data.items.map((item, index) => (
          <li>
            <Link key={index} href={item.path}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ZipCodes;
