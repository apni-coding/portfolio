import Image from "next/image";
import Link from "next/link";
import React from "react";
import rightArrow from "@/app/img/icon/arrow.png";
import webIcon from "@/app/img/icon/7.png";
import hoverIcon from "@/app/img/icon/8.png";
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
          <Image src={hoverIcon} width={0} height={0} alt="Image Not Found" />

          <h4>
            <Link href="services-details.html">{data?.title}</Link>
          </h4>
          <Link href="/" className="btn-style-four">
            <div className="icon">
              <Image
                src={rightArrow}
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
