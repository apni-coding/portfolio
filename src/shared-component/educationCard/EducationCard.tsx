import React from "react";
interface PropsInterface {
  data: {
    id: number;
    title: string;
    subTitle: string;
    time: string;
    description:string
  };
}

export default function EducationCard({ data }: PropsInterface) {
  return (
    <>
      <div className="timeline-style-one-item wow ">
        <div className="timeline-header">
          <div className="left">
            <h4>{data?.title}</h4>
            <p>{data?.subTitle}</p>
          </div>
          <div className="right">
            <span>{data?.time}</span>
          </div>
        </div>
        <div className="timeline-body">
          <p>
           {data?.description}
          </p>
        </div>
      </div>
    </>
  );
}
