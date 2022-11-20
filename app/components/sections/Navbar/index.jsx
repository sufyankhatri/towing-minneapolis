import React from "react";
import Container from "../../general/Container";
import CallLink from "../../general/CallLink";
import Image from "next/image";
import Link from "next/link";

const Navbar = ({ data, contact }) => {
  return (
    <Container className="py-3 bg-secondary sticky top-0 text-white">
      <nav className="w-10/12 lg:w-9/12 grid grid-cols-2 lg:grid-cols-3">
        <div>
          <Link href={data.brand.href}>
            <Image
              src={data.brand.logo.src}
              alt={data.brand.logo.alt}
              width={180}
              height={43}
            />
          </Link>
        </div>
        <div className="hidden lg:flex items-center justify-center space-x-3">
          {data.items.map((item, index) => (
            <p key={index}>
              <Link href={item.href}>{item.text}</Link>
            </p>
          ))}
        </div>
        <div className="flex items-center justify-end">
          <CallLink data={contact} />
        </div>
      </nav>
    </Container>
  );
};

export default Navbar;
