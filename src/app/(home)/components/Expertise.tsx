"use client";
import React, { useEffect, useRef, useState } from "react";
import ExpertiseCard from "@/shared-component/expertiseCard/ExpertiseCard";
import Link from "next/link";

export default function Expertise() {
  const [startCounting, setStartCounting] = useState(false);
  const expertiseSectionRef = useRef(null);

  const expertiseList = [
    { id: 1, logo: "/img/icon/javascript.png", value: 90, title: "JavaScript" },
    { id: 2, logo: "/img/icon/reactjs.png", value: 95, title: "React.js" },
    { id: 3, logo: "/img/icon/nextjs.png", value: 80, title: "Next.js" },
    { id: 4, logo: "/img/icon/redux.png", value: 95, title: "Redux" },
    { id: 5, logo: "/img/icon/nodejs.png", value: 85, title: "Node.js" },
    { id: 6, logo: "/img/icon/mysql.png", value: 90, title: "MySQL" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStartCounting(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 } // Adjust this threshold as needed
    );

    if (expertiseSectionRef.current) {
      observer.observe(expertiseSectionRef.current);
    }

    return () => {
      if (expertiseSectionRef.current) {
        observer.unobserve(expertiseSectionRef.current);
      }
    };
  }, []);

  return (
    <div
      className="fun-factor-area default-padding overflow-hidden"
      ref={expertiseSectionRef}
    >
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
          {expertiseList.map((item) => (
            <ExpertiseCard
              data={item}
              key={item.id}
              // startCounting={startCounting} // Pass this prop to control counting
            />
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
  );
}
