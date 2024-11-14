import Image from "next/image";
import React from "react";

export default function Footer() {
  const url = "url(/app/img/shape/1.jpg)";
  return (
    <>
      <footer
        className="default-padding bg-cover"
        style={{ backgroundImage: url }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="footer-items text-center">
                <a href="#" className="footer-logot">
                  <Image
                    src="/app/img/logo.png"
                    width={500}
                    height={500}
                    alt="Image Not Found"
                  />
                </a>
                <ul className="foter-menu">
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>
                    <a href="service.html">Services</a>
                  </li>
                  <li>
                    <a href="projects.html">Portfolio</a>
                  </li>
                  <li>
                    <a href="https://www.apnicoding.in/blog" target="_blank">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="https://www.apnicoding.in" target="_blank">
                      Website
                    </a>
                  </li>
                  <li>
                    <a href="contact.html">Contact</a>
                  </li>
                </ul>
                <p>Copyright &copy; 2024 Apni Coding. All Rights Reserved</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
