import Link from "next/link";
import React from "react";
import Container from "../../general/Container";
import Divider from "../../general/Divider";

const OurServices = ({ data, params }) => {
  return (
    <Container className="py-16 lg:py-20 bg-secondary text-white">
      <div className="w-10/12 lg:w-9/12 lg:text-lg flex items-center justify-center flex-col">
        <h1 className="text-3xl uppercase lg:text-6xl font-extrabold">
          {data.title}
        </h1>
        <Divider />
        <ul>
          {data.items.map((item, index) => (
            <li key={index}>
              <Link href={item.href}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
};

export default OurServices;
