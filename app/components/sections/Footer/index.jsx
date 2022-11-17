import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./styles.module.css";

const Footer = ({ data, contact, brand }) => {
  return (
    <div>
      <section>
        <Link href={brand.href}>
          <Image
            src={brand.logo.src}
            alt={brand.logo.alt}
            width={180}
            height={43.73}
          />
        </Link>
        <p>
          Phone: <Link href={`tel:${contact.phone}`}>{contact.phone}</Link>
        </p>
      </section>
      <section>
        <h2>{data.services.title}</h2>
        <ul>
          {data.services.items.map((item, index) => (
            <li key={index}>
              <Link href={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Footer;
