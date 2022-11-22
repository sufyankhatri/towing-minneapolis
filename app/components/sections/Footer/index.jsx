import Image from "next/image";
import Link from "next/link";
import Container from "../../general/Container";

export default function Footer({ data, contact, brand }) {
  return (
    <Container className="bg-footer text-white gap-10 py-16 lg:py-20">
      <div className="lg:w-9/12 w-10/12 flex flex-col gap-24 lg:flex-row justify-center">
        <div>
          <Link href={brand.href}>
            <Image
              src={brand.logo.src}
              alt={brand.logo.alt}
              width={180}
              height={43.73}
            />
          </Link>
          <p className="mt-5">
            Phone: <Link href={`tel:${contact.phone}`}>{contact.phone}</Link>
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold">{data.services.title}</h2>
          <ul className="grid lg:grid-cols-2 mt-5 gap-x-24 gap-y-2 text-lg">
            {data.services.items.map((item, index) => (
              <li key={index}>
                <Link className="hover:text-primary transition-all" href={item.path}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Container>
  );
}
