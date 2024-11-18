import EducationCard from "@/shared-component/educationCard/EducationCard";
import React from "react";

export default function TimeLine() {
  const experienceData = [
    {
      id: 1,
      title: "Associate Software Developer",
      subTitle: "iProgrammer Solutions Pvt. Ltd., Pune",
      time: "Aug 2023 - Now",
      description:
        "Developed full-stack applications using the MERN stack with a focus on React.js and Next.js for frontend development, and Node.js with Typescript for backend services.",
    },
    {
      id: 2,
      title: "Teaching Assistant",
      subTitle: "Coding Ninjas, Gurugram",
      time: "July 2023 - Feb 2024",
      description:
        "Conducted engaging and informative online sessions, delivering high-quality instruction to students on programming concepts and problem-solving techniques.",
    },
  ];
  const educationData = [
    {
      id: 1,
      title: "B.Tech in CSE",
      subTitle: "DCURST, Sonipat, Haryana",
      time: "2018-2022",
      description:
        "Earned a B.Tech in CSE from DCRUST, Sonipat, focusing on programming, algorithms, and software development. Gained practical skills through projects and internships.",
    },
    {
      id: 2,
      title: "12th Grade-Science (Mathematics)",
      subTitle: "Marwari College, Darbhanga",
      time: "2016-2018",
      description:
        "Completed Senior Secondary Education with Science and Mathematics at Marwari College, Darbhanga. Developed strong problem-solving skills for future studies in engineering. ",
    },
  ];
  return (
    <>
      <div id="resume" className="timeline-area default-padding bg-gray">
        <div className="container">
          <div className="time-line-style-one-box">
            <div className="row guttex-xl">
              <div className="col-lg-6">
                <h2>My Expertise</h2>
                <div className="time-style-one-items">
                  {experienceData?.map((item) => (
                    <EducationCard data={item} key={item?.id} />
                  ))}
                </div>
              </div>
              <div className="col-lg-6">
                <h2>Education Background</h2>
                <div className="time-style-one-items">
                  {educationData?.map((item) => (
                    <EducationCard data={item} key={item?.id} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
