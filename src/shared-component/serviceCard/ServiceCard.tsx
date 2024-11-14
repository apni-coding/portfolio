import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import rightArrow from '@/app/img/icon/arrow.png'
import webIcon from '@/app/img/icon/7.png'
import hoverIcon from '@/app/img/icon/8.png'


export default function ServiceCard() {
  return (
    <>
      <div
            className="col-xl-3 col-md-6 mb-30 wow fadeInUp"
            
          >
            <div className="service-style-one-item">
            <Image
                    src={webIcon}
                    width={80}
                    height={0}
                    alt="Image Not Found"
                  />
                   <Image
                    src={hoverIcon}
                    width={0}
                    height={0}
                    alt="Image Not Found"
                  />
              
              <h4><Link href="services-details.html">Web Design</Link></h4>
              <Link href="services-details.html" className="btn-style-four">
                <div className="icon">
                  <Image
                    src={rightArrow}
                    width={0}
                    height={0}
                    alt="Image Not Found"
                  />
                </div>
                Read More
              </Link>
              <p style={{textAlign:'justify'}}>
                Crafting modern, responsive websites that capture brand identity
                and ensure a seamless user experience across all devices.
              </p>
              
            </div>
          </div>
    </>
  )
}
