import React from 'react'

export default function Promo() {
  return (
    <>
          <div className="promot-box-area default-padding">
      <div className="container">
        <div className="row">
          <div className="col-xl-8 offset-xl-2">
            <div className="promo-box-items text-center">
              <h2>Hello👋i'm available for work</h2>
              <h4>
                For quick response:
                <a href="https://wa.me/7292932052" target="_blank">
                  <i className="fab fa-whatsapp" style={{color:"#63e6be"}} ></i> Chat
                  now
                </a>
              </h4>
              <div className="button mt-40">
                <a className="btn-style-regular" href="#contact"
                  ><span>Hire Me Now </span> <i className="fas fa-arrow-right"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
