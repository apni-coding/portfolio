import Image from "next/image";
import Link from "next/link";
import React from "react";

interface PropsInterface {
  data: {
    id: number;
    thumbnail: any[];
    tag: string[];
    title: string;
  };
}
export default function WorkCard({ data }: PropsInterface) {
  return (
    <>
      <div className="gallery-item">
        <div className="gallery-style-one">
          <Image
            src={data?.thumbnail[0]}
            width={700}
            height={300}
            alt="Image Not Found"
          />

          <div className="info">
            <div className="overlay">
              <div className="content">
                <ul className="pf-tags">
                  {data?.tag?.map((item, index) => (
                    <li key={ index}>
                      <Link href="#" >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="icon">
                <Link href="/">
                  <i className="fas fa-long-arrow-right"></i>
                </Link>
              </div>
            </div>
            <h4 style={{ textAlign: "center" }}>
              <Link href="/">{data?.title}</Link>
            </h4>
          </div>
        </div>
      </div>
    </>
  );
}
