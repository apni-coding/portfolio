import Image from 'next/image'
import React from 'react'
import javaScriptLogo from '@/app/img/icon/javascript.png'
export default function ExpertiseCard() {
  return (
    <>
     <div className="funfact-style-two-item wow fadeInUp">
            <div className="icon">
              <Image
                    src={javaScriptLogo}
                    width={0}
                    height={60}
                    alt="Image Not Found"
                  />
            </div>
            <div className="fun-fact">
              <div className="counter">
                <div className="timer" data-to="90" data-speed="2000">95</div>
                <div className="operator">%</div>
              </div>
              <span className="medium">JavaScript</span>
            </div>
          </div> 
    </>
  )
}
