import ExpertiseCard from "@/shared-component/expertiseCard/ExpertiseCard";
import React from "react";

export default function Expertise() {
  return (
    <>
      <div className="fun-factor-area default-padding overflow-hidden">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="site-heading text-center">
                <h4 className="sub-title">Top Skills</h4>
                <h2 className="title">See my expertise</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="fun-fact-style-two-items text-center">
            <ExpertiseCard />
            <ExpertiseCard />
            <ExpertiseCard />
            <ExpertiseCard />
            <ExpertiseCard />
            <ExpertiseCard />
          </div>
        </div>
        <div className="row">
                  <div className="col-lg-12 text-center">
                    <div className="load-more-info text-center mt-60 mt-xs-30">
                      <p>
                        Are you interested to show more expertise?
                        <a href="#">Load More</a>
                      </p>
                    </div>
                  </div>
                </div>
      </div>
    </>
  );
}
