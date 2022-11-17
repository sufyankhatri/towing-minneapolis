import Link from "next/link";
import React from "react";
import styles from "./styles.module.css";

const ContactButton = ({ data }) => {
  return (
    <Link href={`tel:${data.phone}`}>
      <p>{data.text}</p>
      <p>{data.phone}</p>
    </Link>
  );
};

export default ContactButton;
