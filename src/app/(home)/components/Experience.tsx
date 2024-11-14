import WorkCard from "@/shared-component/workCard/WorkCard";
import React from "react";
import icon from "@/app/img/shape/9.png";
import Image from "next/image";
export default function Experience() {
  return (
    <>
      <div
        id="portfolio"
        className="portfolio-style-one-area default-padding bg-gray"
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
                  <WorkCard />

                  <WorkCard />
                  <WorkCard />
                </div>
                <div className="row">
                  <div className="col-lg-12 text-center">
                    <div className="load-more-info text-center mt-60 mt-xs-30">
                      <p>
                        Are you interested to show more portfolios?
                        <a href="#">Load More</a>
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
