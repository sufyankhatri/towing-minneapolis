import Link from "next/link";

const ContactButton = ({ data }) => {
  return (
    <Link href={`tel:${data.phone}`}>
      <button className="btnPrimary py-6 px-10 bg-contactButton bg-cover bg-center flex flex-col items-center">
        <h1 className="lg:text-xl uppercase font-bold">{data.text}</h1>
        <p className="text-3xl lg:text-5xl mt-1 font-bold">{data.phone}</p>
      </button>
    </Link>
  );
};

export default ContactButton;
