import WorkCard from "@/shared-component/workCard/WorkCard";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

export default function Experience() {
  const portFolioList = [
    {
      id: 1,
      thumbnail: ["/img/projects/1.jpg"],
      tag: ["Web", "Coding"],
      title: "askUtec by UltraTech ~ Social Media & Booking Platform",
    },
    {
      id: 2,
      thumbnail: ["/img/projects/1.jpg"],
      tag: ["Web", "Coding"],
      title: "Coolant Management System",
    },
    {
      id: 3,
      thumbnail: ["/img/projects/health.jpg"],
      tag: ["Mobile", "Coding"],
      title: "OKU ~ Personalized Healthcare Application",
    },
  ];
  return (
    <>
     <Head>
        <title>Vivek | Experience</title>
        <meta name="description" content="Vivek Kumar Experience" />
        <meta name="keywords" content="vivek kumar, vivek kumar portfolio, vivek kumar website, vivek kumar apni coding, apni coding vivek kumar, Web Development" />
      </Head>
      <div
        id="portfolio"
        className="portfolio-style-one-area default-padding bg-gray"
        style={{ marginTop: "-140px" }}
      >
        <div className="shape-top-left">
          <Image src={"/img/shape/9.png"} width={0} height={0} alt="Image Not Found" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="site-heading text-center">
                <h4 className="sub-title">Portfolio</h4>
                <h2 className="title">My Recent Work</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12 gallery-content">
              <div className="magnific-mix-gallery gallery-masonary">
                <div id="gallery-masonary" className="gallery-items colums-3">
                  {portFolioList?.map((item, index) => (
                    <WorkCard data={item} key={item?.id || index} />
                  ))}
                </div>
                <div className="row">
                  <div className="col-lg-12 text-center">
                    <div className="load-more-info text-center mt-60 mt-xs-30">
                      <p>
                        Are you interested to show more portfolios?
                        <Link href="/">Load More</Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
