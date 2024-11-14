import EducationCard from '@/shared-component/educationCard/EducationCard'
import React from 'react'

export default function TimeLine() {
  return (
    <>
        <div id="resume" className="timeline-area default-padding bg-gray">
      <div className="container">
        <div className="time-line-style-one-box">
          <div className="row guttex-xl">
            <div className="col-lg-6">
              <h2>My Expertise</h2>
              <div className="time-style-one-items">
               <EducationCard />
               <EducationCard />

              </div>
            </div>
            <div className="col-lg-6">
              <h2>Education Background</h2>
              <div className="time-style-one-items">
              <EducationCard />
              <EducationCard />

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
