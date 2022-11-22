import React from "react";
import Container from "../../general/Container";

const CallBack = ({ data }) => {
  return (
    <Container className="bg-primary py-16 lg:py-20 px-10">
      <form className="p-10 bg-white rounded-xl max-w-xl flex items-center flex-col shadow-2xl shadow-gray-700/50">
        <h2 className="text-center text-3xl lg:text-6xl text-primary font-extrabold">
          {data.title}
        </h2>
        <div className="space-y-3 mt-6">
          {data.items.map((item, index) => (
            <input
              className="w-full border rounded focus:outline-none focus:ring-primary px-6 py-3"
              type={item.type}
              key={index}
              placeholder={item.placeholder}
              name={item.name}
            />
          ))}
        </div>
        <button type="submit" className="btnPrimary mt-5 w-full">
          {data.submit.text}
        </button>
      </form>
    </Container>
  );
};

export default CallBack;
