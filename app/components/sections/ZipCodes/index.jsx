import Link from "next/link";

const ZipCodes = ({ data }) => {
  return (
    <div className="bg-primary p-10">
      <h2 className="text-2xl text-white lg:text-5xl font-extrabold">
        {data.title}
      </h2>
      <div className="mt-8 grid grid-cols-2 lg:grid-cols-5 gap-2">
        {data.items.map((item, index) => (
          <>
            <Link
              key={index}
              className="px-4 py-2 rounded border border-white/80 text-center hover:bg-white transition-all"
              href={item.path}
            >
              {item.name}
            </Link>
          </>
        ))}
      </div>
    </div>
  );
};

export default ZipCodes;
