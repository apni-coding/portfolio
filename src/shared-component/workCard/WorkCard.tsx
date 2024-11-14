import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import projectIcon from '@/app/img/projects/1.jpg'
export default function WorkCard() {
  return (
    <>
      <div className="gallery-item">
                  <div className="gallery-style-one">
                  <Image
                    src={projectIcon}
                    width={700}
                    height={300}
                    alt="Image Not Found"
                  />
                    
                    <div className="info">
                      <div className="overlay">
                        <div className="content">
                          <ul className="pf-tags">
                            <li>
                              <a href="#">Web</a>
                            </li>
                            <li>
                              <a href="#">Coding</a>
                            </li>
                          </ul>
                        </div>
                        <div className="icon">
                          <Link href="project-details.html"
                            ><i className="fas fa-long-arrow-right"></i></Link>
                        </div>
                      </div>
                      <h4  style={{textAlign:"center"}}>
                        <Link href="project-details.html"
                          >askUtec by UltraTEch ~ Social & Booking Platform</Link>
                      </h4>
                    </div>
                  </div>
                </div>
    </>
  )
}
