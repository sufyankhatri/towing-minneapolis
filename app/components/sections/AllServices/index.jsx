import Link from "next/link";
import React from "react";
import Container from "../../general/Container";
import Divider from "../../general/Divider";

const AllServices = ({ data }) => {
  return (
    <Container className="bg-secondary py-16 lg:py-20 text-white">
      <div className="w-10/12 lg:w-9/12 lg:text-lg flex items-center justify-center flex-col">
        <h1 className="text-3xl text-center uppercase lg:text-6xl font-extrabold">
          {data.title}
        </h1>
        <Divider />
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 mt-5">
          {data.items.map((item, index) => (
            <>
              <Link
                key={index}
                className="px-4 py-2 rounded border border-white/50 text-center hover:text-black hover:bg-white transition-all"
                href={item.path}
              >
                {item.name}
              </Link>
            </>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default AllServices;
