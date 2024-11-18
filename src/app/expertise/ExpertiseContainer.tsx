"use client";
import ExpertiseCard from "@/shared-component/expertiseCard/ExpertiseCard";
import React from "react";
import javaScriptLogo from "@/app/img/icon/javascript.png";
import reactJsLogo from "@/app/img/icon/reactjs.png";
import nextJsLogo from "@/app/img/icon/nextjs.png";
import reduxLogo from "@/app/img/icon/redux.png";
import nodeJsLogo from "@/app/img/icon/nodejs.png";
import mysqlLogo from "@/app/img/icon/mysql.png";
import typescriptLogo from "@/app/img/icon/typescript.png";
import expressLogo from "@/app/img/icon/express.png";
import postgresqlLogo from "@/app/img/icon/postgress.png";
import mongodbLogo from "@/app/img/icon/mongodb.png";
import sequelizeLogo from "@/app/img/icon/sequelize.png";
import awsLogo from "@/app/img/icon/aws.png";
import githubLogo from "@/app/img/icon/github.png";
import bitbucketLogo from "@/app/img/icon/bitbucket.png";
import javaLogo from "@/app/img/icon/java.png";
import htmlLogo from "@/app/img/icon/html.png";
import cssLogo from "@/app/img/icon/css.png";
import excelLogo from "@/app/img/icon/excel.png";
import wordLogo from "@/app/img/icon/word.png";


export default function ExpertiseContainer() {
  const expertiseList = [
    {
      id: 1,
      logo: reactJsLogo,
      value: 95,
      title: "React.js",
    },
    {
      id: 2,
      logo: nextJsLogo,
      value: 85,
      title: "Next.js",
    },
    {
      id: 3,
      logo: reduxLogo,
      value: 95,
      title: "Redux",
    },
    {
      id: 4,
      logo: javaScriptLogo,
      value: 90,
      title: "JavaScript",
    },
    {
      id: 5,
      logo: typescriptLogo, // Assuming you have a `typescriptLogo` variable
      value: 80,
      title: "TypeScript",
    },
    {
      id: 6,
      logo: nodeJsLogo,
      value: 85,
      title: "Node.js",
    },
    {
      id: 7,
      logo: expressLogo, // Assuming you have an `expressLogo` variable
      value: 80,
      title: "Express.js",
    },
   
   
  ];

  const expertiseListSecond = [
    {
      id: 8,
      logo: mysqlLogo,
      value: 90,
      title: "MySQL",
    },
    {
      id: 9,
      logo: postgresqlLogo, // Assuming you have a `postgresqlLogo` variable
      value: 75,
      title: "PostgreSQL",
    },
    {
      id: 10,
      logo: mongodbLogo, // Assuming you have a `mongodbLogo` variable
      value: 70,
      title: "MongoDB",
    },
    {
      id: 11,
      logo: sequelizeLogo, // Assuming you have a `sequelizeLogo` variable
      value: 80,
      title: "Sequelize",
    },
    {
      id: 12,
      logo: mongodbLogo, // Assuming you have a `mongoosesLogo` variable
      value: 75,
      title: "Mongoose",
    },
    {
      id: 13,
      logo: awsLogo, // Assuming you have an `awsLogo` variable
      value: 70,
      title: "AWS",
    },
    {
      id: 14,
      logo: githubLogo, // Assuming you have a `githubLogo` variable
      value: 90,
      title: "GitHub",
    },
   
  ];

  const expertiseListThird = [
    {
      id: 15,
      logo: bitbucketLogo, // Assuming you have a `bitbucketLogo` variable
      value: 70,
      title: "Bitbucket",
    },
    {
      id: 16,
      logo: javaLogo, // Assuming you have a `javaLogo` variable
      value: 60,
      title: "Java",
    },
    {
      id: 17,
      logo: htmlLogo, // Assuming you have an `htmlLogo` variable
      value: 95,
      title: "HTML",
    },
    {
      id: 18,
      logo: cssLogo, // Assuming you have a `cssLogo` variable
      value: 90,
      title: "CSS",
    },
    {
      id: 19,
      logo: excelLogo, // Assuming you have a `cssLogo` variable
      value: 80,
      title: "MS Excel",
    },
    {
      id: 20,
      logo: wordLogo, // Assuming you have a `cssLogo` variable
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
