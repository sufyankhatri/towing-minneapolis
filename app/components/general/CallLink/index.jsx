import Link from "next/link";
import React from "react";
import styles from "./styles.module.css";

const CallLink = ({ data }) => {
  return <Link href={`tel:${data.phone}`}>{data.phone}</Link>;
};

export default CallLink;
