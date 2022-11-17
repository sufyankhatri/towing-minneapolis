import React from "react";
import styles from "./styles.module.css";

const Reviews = ({ data }) => {
  return (
    <section>
      <h2>{data.title}</h2>
      <ul>
        {data.items.map((item, index) => (
          <li key={index}>
            <h3>{item.author.name}</h3>
            <p>{item.review}</p>
            <p>{item.stars} Stars</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Reviews;
