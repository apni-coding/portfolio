import ServiceCard from "@/shared-component/serviceCard/ServiceCard";
import React from "react";

export default function Services() {
  return (
    <>
      <div
        id="services"
        className="services-style-one-area default-padding bottom-less"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="site-heading text-center">
                <h4 className="sub-title">Services</h4>
                <h2 className="title">My Quality Services</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="site-heading text-center">
                <h4 className="sub-title">View All <i className="fa-solid fa-arrow-right"></i></h4>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
