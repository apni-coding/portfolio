import Image from "next/image";
import Link from "next/link";
import React from "react";
interface PropsInterface {
  data: {
    id: number;
    title: string;
    logo: any;
    description: string;
  };
}

export default function ServiceCard({ data }: PropsInterface) {
  return (
    <>
      <div className="col-xl-3 col-md-6 mb-30 wow fadeInUp">
        <div className="service-style-one-item">
          <Image src={data?.logo} width={80} height={0} alt="Image Not Found" />
          <Image src={"/img/icon/8.png"} width={80} height={0} alt="Image Not Found" />

          <h4>
            <Link href="services-details.html">{data?.title}</Link>
          </h4>
          <Link href="/" className="btn-style-four">
            <div className="icon">
              <Image
                src={"/img/icon/arrow.png"}
                width={0}
                height={0}
                alt="Image Not Found"
              />
            </div>
            Read More
          </Link>
          <p style={{ textAlign: "justify" }}>{data?.description}</p>
        </div>
      </div>
    </>
  );
}
