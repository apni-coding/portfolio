"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for menu toggle

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu open/close
  };

  return (
    <>
      <header>
        <nav className="navbar mobile-sidenav navbar-box navbar-default validnavs navbar-sticky">
          <div className="top-search">
            <div className="container-xl">
              <div className="input-group">
                <span className="input-group-addon">
                  <i className="fa fa-search"></i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                />
                <span className="input-group-addon close-search">
                  <i className="fa fa-times"></i>
                </span>
              </div>
            </div>
          </div>

          <div className="container nav-box d-flex justify-content-between align-items-center">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle"
                onClick={toggleMenu} // Toggle the menu on click
              >
                <i className="fa fa-bars"></i>
              </button>
              <Link className="navbar-brand" href="/">
                {!isMenuOpen && (
                  <Image
                    src={"/img/logo.png"}
                    width={150}
                    height={30}
                    className="logo"
                    alt="Image Not Found"
                  />
                )}
              </Link>
            </div>

            {/* Conditionally render the collapse menu based on state */}
            <div
              className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}
              id="navbar-menu"
            >
              <button
                type="button"
                className="navbar-toggle"
                onClick={toggleMenu} // Toggle menu on close
              >
                <i className="fa-solid fa-circle-xmark"></i>
              </button>

              <ul className="nav navbar-nav navbar-right">
                <li className="dropdown">
                  <Link href="/" className="smooth-menu">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="smooth-menu">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="#portfolio" className="smooth-menu">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link href="#resume" className="smooth-menu">
                    Resume
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="smooth-menu">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div className="nav-right">
              <div className="attr-right">
                <div className="attr-nav attr-box">
                  <ul>
                    <li className="button">
                      <Link href="#contact" className="smooth-menu">
                        Let's Talk <i className="fas fa-comment-alt"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="overlay-screen"></div>
        </nav>
      </header>
    </>
  );
}
