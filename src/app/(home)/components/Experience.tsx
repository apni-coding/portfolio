import WorkCard from "@/shared-component/workCard/WorkCard";
import React from "react";
import icon from "@/app/img/shape/9.png";
import Image from "next/image";
import project1 from "@/app/img/projects/1.jpg";
import healthapp from "@/app/img/projects/health.jpg";
import Link from "next/link";

export default function Experience() {
  const portFolioList = [
    {
      id: 1,
      thumbnail: [project1],
      tag: ["Web", "Coding"],
      title: "askUtec by UltraTech ~ Social Media & Booking Platform",
    },
    {
      id: 2,
      thumbnail: [project1],
      tag: ["Web", "Coding"],
      title: "Coolant Management System",
    },
    {
      id: 3,
      thumbnail: [healthapp],
      tag: ["Mobile", "Coding"],
      title: "OKU ~ Personalized Healthcare Application",
    },
  ];
  return (
    <>
      <div
        id="portfolio"
        className="portfolio-style-one-area default-padding bg-gray"
        style={{ marginTop: "-140px" }}
      >
        <div className="shape-top-left">
          <Image src={icon} width={0} height={0} alt="Image Not Found" />
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
                  {portFolioList?.map((item) => (
                    <WorkCard data={item} key={item?.id} />
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
