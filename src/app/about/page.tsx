import Image from 'next/image'
import React from 'react'
import start_shape from '@/app/img/shape/8.png'
import start_shape_dark from '@/app/img/shape/3.png'
import my_photo from '@/app/img/about/2.jpg'
import team_one from '@/app/img/team/14.jpg'
import team_two from '@/app/img/team/15.jpg'
import team_three from '@/app/img/team/16.jpg'
import team_four from '@/app/img/team/17.jpg'
import video_play from '@/app/img/about/1.jpg'

import Link from 'next/link'



export default function page() {
  return (
    <>
         <div id="about" className="about-style-one-area bg-gray default-padding">
      <div className="shape-style-one">
        
        <Image
                    src={start_shape_dark}
                    width={0}
                    height={0}
                    alt="Image Not Found"
                  />
        <Image
                    src={start_shape}
                    width={0}
                    height={0}
                    className="upDownScrol"
                    alt="Image Not Found"
                  />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="fun-fact-style-one-items">
              <div className="fun-fact">
                <div className="counter">
                  <div className="timer" data-to="2" data-speed="1000">2</div>
                  <div className="operator">+</div>
                </div>
                <span className="medium">Years of Experience</span>
              </div>
              <div className="fun-fact">
                <div className="counter">
                  <div className="timer" data-to="8" data-speed="1000">8</div>
                  <div className="operator">+</div>
                </div>
                <span className="medium">Projects completed</span>
              </div>
            </div>
            <div className="clieents-list mt-40">
              <div className="d-flex">
                <div className="thumb">
                <Image
                    src={team_one}
                    width={0}
                    height={0}
                    alt="Image Not Found"
                  />
                   <Image
                    src={team_two}
                    width={0}
                    height={0}
                    alt="Image Not Found"
                  />
                   <Image
                    src={team_three}
                    width={0}
                    height={0}
                    alt="Image Not Found"
                  />
                   <Image
                    src={team_four}
                    width={0}
                    height={0}
                    alt="Image Not Found"
                  />
                  
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7 pl-80 pl-md-15 pl-xs-15">
            <div className="about-style-one-info">
              <p style={{textAlign:'justify'}}>
                As a passionate MERN stack developer and a dedicated video
                creator on Youtube, I thrive at the intersection of technology
                and education. With a solid background in MongoDB, Express.js,
                React.js, Node.js, Nest.js, MySQL, PostgreSQL, Next.js and AWS,
                I build robust, dynamic web applications.
              </p>
              <Link
                className="btn-style-regular btn-border"
                href="https://www.apnicoding.in/about"
                target="_blank"
                ><span>Learn More</span> <i className="fas fa-arrow-right"></i></Link>
            </div>
          </div>
        </div>

        <div className="about-style-one-bottom-info mt-50">
          <div className="row">
            <div className="col-lg-8 pr-60 pr-md-15 pr-xs-15">
              <div className="img-container">
                
                <Image
                    src={video_play}
                    width={0}
                    height={0}
                    alt="Image Not Found"
                  />
                <Link
                  href="https://www.youtube.com/watch?si=uP73_1sXxwzQnSZG&v=h5SzlFtUUec&feature=youtu.be"
                  className="popup-youtube video-play-button"
                >
                  <i className="fas fa-play"></i>
                  <div className="effect"></div>
                </Link>
              </div>
            </div>
            <div className="col-lg-4">
              
              <Image
                    src={my_photo}
                    width={0}
                    height={0}
                    alt="Image Not Found"
                  />
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
