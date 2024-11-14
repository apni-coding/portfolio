import Image from 'next/image'
import React from 'react'
import userProfile from '@/app/img/illustration/5.png'
import shape from '@/app/img/shape/13.png'

export default function ContactUsContainer() {
  return (
    <>
       <div
      id="contact"
      className="contact-style-one-area default-padding bg-gray"
    >
      <div className="container">
        <div className="contact-style-one-items">
          <h1 className="fixed-text">Contact Me</h1>
          <div className="row">
            <div className="col-lg-6">
              <form id="contact-form" className="contact-form">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <input
                        className="form-control"
                        id="name"
                        name="name"
                        placeholder="Name*"
                        type="text"
                        required
                      />
                      <span className="alert-error"></span>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group">
                      <input
                        className="form-control"
                        id="email"
                        name="email"
                        placeholder="Email*"
                        type="email"
                        required
                      />
                      <span className="alert-error"></span>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <input
                        className="form-control"
                        id="phone"
                        name="phone"
                        placeholder="Phone*"
                        type="text"
                        required
                      />
                      <span className="alert-error"></span>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group comments">
                      <textarea
                        className="form-control"
                        id="comments"
                        name="comments"
                        placeholder="Your Message*"
                        required
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <button className="btn-style-regular" type="submit">
                      <span>Get in Touch</span>
                      <i className="fas fa-arrow-right"></i>
                    </button>
                  </div>
                </div>
                <div className="col-lg-12 alert-notification">
                  <div id="message" className="alert-msg"></div>
                </div>
              </form>
            </div>
          </div>

          <div className="contact-illustration">
          <Image
                    src={userProfile}
                    width={0}
                    height={637}
                    alt="Image Not Found"
                  />
                  <Image
                    src={shape}
                    width={0}
                    height={0}
                    alt="Image Not Found"
                  />
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
