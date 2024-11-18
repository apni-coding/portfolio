import ExpertiseCard from "@/shared-component/expertiseCard/ExpertiseCard";
import React from "react";
import javaScriptLogo from "@/app/img/icon/javascript.png";
import reactJsLogo from "@/app/img/icon/reactjs.png";
import nextJsLogo from "@/app/img/icon/nextjs.png";
import reduxLogo from "@/app/img/icon/redux.png";
import nodeJsLogo from "@/app/img/icon/nodejs.png";
import mysqlLogo from "@/app/img/icon/mysql.png";



import Link from "next/link";

export default function Expertise() {
  const expertiseList = [
    {
      id: 1,
      logo: javaScriptLogo,
      value: 90,
      title: "JavaScript",
    },
    {
      id: 2,
      logo: reactJsLogo,
      value: 95,
      title: "React.js",
    },
    {
      id: 3,
      logo: nextJsLogo,
      value: 80,
      title: "Next.js",
    },
    {
      id: 4,
      logo: reduxLogo,
      value: 95,
      title: "Redux",
    },
    {
      id: 5,
      logo: nodeJsLogo,
      value: 85,
      title: "Node.js",
    },
    {
      id: 6,
      logo: mysqlLogo,
      value: 90,
      title: "MySQL",
    },
  ];
  
  
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
            {expertiseList?.map((item) => (
              <ExpertiseCard data={item} key={item?.id} />
            ))}
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 text-center">
            <div className="load-more-info text-center mt-60 mt-xs-30">
              <p>
                Are you interested to show more expertise?
                <Link href="/expertise">View All</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
