import React from "react";
import Container from "../../general/Container";
import Divider from "../../general/Divider";
import { StarIcon } from "@heroicons/react/24/solid";

const Reviews = ({ data }) => {
  let stars = [
    <StarIcon className="h-5" />,
    <StarIcon className="h-5" />,
    <StarIcon className="h-5" />,
    <StarIcon className="h-5" />,
    <StarIcon className="h-5" />,
  ];
  return (
    <Container className="bg-primary py-16 lg:py-24 text-white">
      <div className="w-10/12 lg:w-9/12 flex flex-col items-center">
        <h2 className="text-2xl lg:text-5xl uppercase text-center font-extrabold">
          {data.title}
        </h2>
        <Divider />
        <div className="mt-5">
          {data.items.map((item, index) => (
            <div className="grid lg:grid-cols-review mt-5" key={index}>
              <h3 className="text-2xl font-extrabold">{item.author.name}</h3>
              <div>
                <p>{item.review}</p>
                <p className="mt-2 text-lg flex items-center">
                  <span className="mr-2 mt-1">{item.stars}.0</span>
                  {stars.map((item) => <>{item}</>).slice(0, item.stars)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Reviews;
