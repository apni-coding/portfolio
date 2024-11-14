import React from "react";
import myPhoto from "@/app/img/illustration/1.png";
import shapeOne from "@/app/img/shape/1.png";
import shapeThree from "@/app/img/shape/3.png";

import Link from "next/link";
import Image from "next/image";
import useTextRotation from "@/hooks/useTextRotation";
import useTypewriter from "@/hooks/useTypeWriter";
export default function Banner() {
  const typewriterText = useTypewriter(
    ["Full Stack Developer", "Professional Coder", "YouTube Creator"],
    50, // Typing speed (in milliseconds)
    2000 // Pause duration (in milliseconds)
  );
  return (
    <>
      <div className="banner-style-one-area bg-gray">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="banner-style-one-items">
                <div className="info">
                  <h1>I👋 am Vivek</h1>
                  <h2>
                    <span className="header-caption" id="page-top">
                      {/* <!-- type headline start--> */}
                      <span className="cd-headline clip is-full-width">
                        {/* <!-- ROTATING TEXT --> */}
                        <span className="cd-words-wrapper">
                          <b className="is-visible">{typewriterText}</b>
                        </span>
                      </span>
                      {/* <!-- type headline end --> */}
                    </span>
                  </h2>
                  <div className="d-grid">
                    <div className="circle-text-card">
                      <div className="circle-text style-two">
                        {/* <!-- curved-circle start--> */}
                        <div
                          className="circle-text-item"
                          data-circle-text-options='{"radius": 75, "forceWidth": true, "forceHeight": true }'
                        >
                          . See My Portfolio . My Expertise
                        </div>
                      </div>
                      <Link href="/">
                        <i className="fa-solid fa-download"></i>
                      </Link>
                    </div>
                    <p style={{ textAlign: "justify" }}>
                      Hi, I'm Vivek Kumar, a MERN Stack Developer with over 2+
                      years of experience. I've successfully completed multiple
                      projects, including the OKU Health application, a Coolant
                      Management System, and askUtec—a social media platform.
                      Additionally, I worked on Utec by UltraTech, a high-impact
                      project with millions of users. My background in scalable
                      web development allows me to tackle complex challenges
                      while continuously expanding my skills to deliver
                      exceptional results.
                    </p>
                  </div>
                  <div className="flex-social mt-40">
                    <div className="button">
                      <Link className="btn-style-regular" href="#contact">
                        <span>Hire Me Now</span>
                        <i className="fas fa-arrow-right"></i>
                      </Link>
                    </div>
                    <ul className="social-info">
                      <li>
                        <Link href="https://www.apnicoding.in/" target="_blank">
                          <i className="fab fa-dribbble"></i>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="https://www.linkedin.com/in/vivek-kumar-b48165258/"
                          target="_blank"
                        >
                          <i className="fab fa-linkedin-in"></i>
                        </Link>
                      </li>

                      <li>
                        <Link
                          href="https://github.com/apni-coding"
                          target="_blank"
                        >
                          <i className="fab fa-github"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="thumb">
                  <Image
                    src={myPhoto}
                    width={1000}
                    height={500}
                    alt="Image Not Found"
                  />
                  <Image
                    src={shapeOne}
                    width={0}
                    height={0}
                    alt="Image Not Found"
                  />
                  <Image
                    src={shapeThree}
                    width={90}
                    height={0}
                    alt="Image Not Found"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
