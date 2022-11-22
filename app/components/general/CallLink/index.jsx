import Link from "next/link";
import React from "react";

const CallLink = ({ data }) => {
  return (
    <Link className="btnPrimary" href={`tel:${data.phone}`}>
      {data.phone}
    </Link>
  );
};

export default CallLink;
