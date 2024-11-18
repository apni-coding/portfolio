import ServiceCard from "@/shared-component/serviceCard/ServiceCard";
import React from "react";
import webIcon from "@/app/img/icon/7.png";
import appIcon from "@/app/img/icon/5.png";
import careIcon from "@/app/img/icon/4.png";
import uiUxIcon from "@/app/img/icon/6.png";


export default function Services() {
  const servicesList = [
    {
      id:1,
      title:"Web Design",
      logo:webIcon,
      description:"Crafting modern, responsive websites that capture brand identity and ensure a seamless user experience across all devices."
    },
    {
      id:2,
      title:"App Development",
      logo:appIcon,
      description:"Developing high-performance, cross-platform apps tailored to your business needs, with a focus on scalability and user satisfaction."
    },
    {
      id:3,
      title:"Care & Support",
      logo:careIcon,
      description:"Providing reliable updates, troubleshooting and enhancements to keep your application secure and running smoothly. "
    },
    {
      id:3,
      title:"UI/UX Design",
      logo:uiUxIcon,
      description:"Designing intuitive, visually appealing interfaces that prioritize user engagement and functionality for optimal experiences. "
    }
  ]
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
            {
              servicesList?.map((item)=>(
                <ServiceCard data={item} key={item?.id}/>
              ))
            }
           
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
