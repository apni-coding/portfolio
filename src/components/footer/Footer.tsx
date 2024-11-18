import Image from "next/image";
import Link from "next/link";
import React from "react";

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
