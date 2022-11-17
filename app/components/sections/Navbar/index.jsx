import React from "react";
import styles from "./styles.module.css";
import Container from "../../general/Container";
import CallLink from "../../general/CallLink";
import Image from "next/image";
import Link from "next/link";

const Navbar = ({ data, contact }) => {
  return (
    <Container>
      <nav className={styles.container}>
        <Link href={data.brand.href}>
          <Image
            src={data.brand.logo.src}
            alt={data.brand.logo.alt}
            width={180}
            height={43.73}
          />
        </Link>
        <ul className={styles.navbarItems}>
          {data.items.map((item, index) => (
            <li key={index}>
              <Link href={item.href}>{item.text}</Link>
            </li>
          ))}
        </ul>
        <CallLink data={contact} />
      </nav>
    </Container>
  );
};

export default Navbar;
