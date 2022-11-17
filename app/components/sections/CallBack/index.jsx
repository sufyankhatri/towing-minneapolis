import React from "react";
import styles from "./styles.module.css";

const CallBack = ({ data }) => {
  return (
    <section>
      <form>
        <h2>{data.title}</h2>
        {data.items.map((item, index) => (
          <div>
            <input
              type={item.type}
              key={index}
              placeholder={item.placeholder}
              name={item.name}
            />
          </div>
        ))}
        <button type="submit">{data.submit.text}</button>
      </form>
    </section>
  );
};

export default CallBack;
