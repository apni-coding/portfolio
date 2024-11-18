import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../app/img/logo.png";

export default function Footer() {
  const url = "url(/app/img/shape/1.jpg)";
  const d = new Date();
  let year = d.getFullYear();
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
                <Link href="/" className="footer-logot">
                  <Image
                    src={logo}
                    width={200}
                    height={500}
                    alt="Image Not Found"
                  />
                </Link>
                <ul className="foter-menu">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="#services">Services</Link>
                  </li>
                  <li>
                    <Link href="#portfolio">Portfolio</Link>
                  </li>
                  <li>
                    <Link href="https://www.apnicoding.in/blog" target="_blank">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.apnicoding.in" target="_blank">
                      Website
                    </Link>
                  </li>
                  <li>
                    <Link href="#contact">Contact</Link>
                  </li>
                </ul>
                <p>Copyright &copy; {year} Apni Coding. All Rights Reserved</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
