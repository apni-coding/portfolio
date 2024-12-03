import ServiceCard from "@/shared-component/serviceCard/ServiceCard";
import React from "react";
import Head from "next/head";


export default function Services() {
  const servicesList = [
    {
      id:1,
      title:"Web Design",
      logo:"/img/icon/7.png",
      description:"Crafting modern, responsive websites that capture brand identity and ensure a seamless user experience across all devices."
    },
    {
      id:2,
      title:"App Development",
      logo:"/img/icon/5.png",
      description:"Developing high-performance, cross-platform apps tailored to your business needs, with a focus on scalability and user satisfaction."
    },
    {
      id:3,
      title:"Care & Support",
      logo:"/img/icon/4.png",
      description:"Providing reliable updates, troubleshooting and enhancements to keep your application secure and running smoothly. "
    },
    {
      id:4,
      title:"UI/UX Design",
      logo:"/img/icon/6.png",
      description:"Designing intuitive, visually appealing interfaces that prioritize user engagement and functionality for optimal experiences. "
    }
  ]
  return (
    <>
    <Head>
        <title>Vivek | Services</title>
        <meta name="description" content="Vivek Kumar Services" />
        <meta name="keywords" content="vivek kumar, vivek kumar portfolio, vivek kumar website, vivek kumar apni coding, apni coding vivek kumar, Web Development" />
      </Head>
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
              servicesList?.map((item, index)=>(
                <ServiceCard data={item} key={item?.id || index}/>
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
