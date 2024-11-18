"use client";
import React, { useEffect, useState, useRef } from "react";
import dynamic from "next/dynamic";
import MainLoader from "../loader/MainLoader";

const LazyLoadComponent = ({ component: Component, ...props }:any) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsLoaded(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={sectionRef}>
      {isLoaded ? <Component {...props} /> : <MainLoader />}
    </div>
  );
};

export default LazyLoadComponent;
