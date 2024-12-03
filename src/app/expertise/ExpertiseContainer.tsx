"use client";
import ExpertiseCard from "@/shared-component/expertiseCard/ExpertiseCard";
import React from "react";



export default function ExpertiseContainer() {
  const expertiseList = [
    {
      id: 1,
      logo: "img/icon/reactjs.png",
      value: 95,
      title: "React.js",
    },
    {
      id: 2,
      logo: "/img/icon/nextjs.png",
      value: 85,
      title: "Next.js",
    },
    {
      id: 3,
      logo: "/img/icon/redux.png",
      value: 95,
      title: "Redux",
    },
    {
      id: 4,
      logo: "/img/icon/javascript.png",
      value: 90,
      title: "JavaScript",
    },
    {
      id: 5,
      logo: "/img/icon/typescript.png", // Assuming you have a `typescriptLogo` variable
      value: 80,
      title: "TypeScript",
    },
    {
      id: 6,
      logo: "/img/icon/nodejs.png",
      value: 85,
      title: "Node.js",
    },
    {
      id: 7,
      logo: "/img/icon/express.png", // Assuming you have an `expressLogo` variable
      value: 80,
      title: "Express.js",
    },
   
   
  ];

  const expertiseListSecond = [
    {
      id: 8,
      logo: "/img/icon/mysql.png",
      value: 90,
      title: "MySQL",
    },
    {
      id: 9,
      logo: "/img/icon/postgress.png", // Assuming you have a `postgresqlLogo` variable
      value: 75,
      title: "PostgreSQL",
    },
    {
      id: 10,
      logo: "/img/icon/mongodb.png", // Assuming you have a `mongodbLogo` variable
      value: 70,
      title: "MongoDB",
    },
    {
      id: 11,
      logo: "/img/icon/sequelize.png", // Assuming you have a `sequelizeLogo` variable
      value: 80,
      title: "Sequelize",
    },
    {
      id: 12,
      logo: "/img/icon/mongodb.png", // Assuming you have a `mongoosesLogo` variable
      value: 75,
      title: "Mongoose",
    },
    {
      id: 13,
      logo: "/img/icon/aws.png", // Assuming you have an `awsLogo` variable
      value: 70,
      title: "AWS",
    },
    {
      id: 14,
      logo: "/img/icon/github.png", // Assuming you have a `githubLogo` variable
      value: 90,
      title: "GitHub",
    },
   
  ];

  const expertiseListThird = [
    {
      id: 15,
      logo: "/img/icon/bitbucket.png", // Assuming you have a `bitbucketLogo` variable
      value: 70,
      title: "Bitbucket",
    },
    {
      id: 16,
      logo: "/img/icon/java.png", // Assuming you have a `javaLogo` variable
      value: 60,
      title: "Java",
    },
    {
      id: 17,
      logo: "/img/icon/html.png", // Assuming you have an `htmlLogo` variable
      value: 95,
      title: "HTML",
    },
    {
      id: 18,
      logo: "/img/icon/css.png", // Assuming you have a `cssLogo` variable
      value: 90,
      title: "CSS",
    },
    {
      id: 19,
      logo: "/img/icon/excel.png", // Assuming you have a `cssLogo` variable
      value: 80,
      title: "MS Excel",
    },
    {
      id: 20,
      logo: "/img/icon/word.png", // Assuming you have a `cssLogo` variable
      value: 90,
      title: "MS Word",
    },
   
  ];
  return (
    <>
      <div className="fun-factor-area default-padding overflow-hidden mt-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="site-heading text-center mt-4">
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
        <div className="container mt-4">
          <div className="fun-fact-style-two-items text-center">
            {expertiseListSecond?.map((item) => (
              <ExpertiseCard data={item} key={item?.id} />
            ))}
          </div>
        </div>
        <div className="container mt-4">
          <div className="fun-fact-style-two-items text-center">
            {expertiseListThird?.map((item) => (
              <ExpertiseCard data={item} key={item?.id} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
