"use client";
import { requestOtp } from "@/redux/slices/authSlice/authSlice";
import { AppDispatch, RootState } from "@/redux/store";

import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import Banner from "./Banner";
import About from "./About";
import Services from "./Services";
import Experience from "./Experience";
import Expertise from "./Expertise";
import ContactUsContainer from "@/app/contact/ContactUsContainer";
import Footer from "@/components/footer/Footer";
import Promo from "./Promo";
import TimeLine from "./TimeLine";

import ScrollToTop from "react-scroll-to-top";
import LazyLoadComponent from "@/shared-component/lazyLoadig/LazyLoadingComponent";
import MainLoader from "@/shared-component/loader/MainLoader";
import Head from "next/head";

export default function HomeContainer() {
  const [isMount, setIsMount] = useState(false);
  const dispatch: AppDispatch = useDispatch();
  const { isUserAuthenticate, isLoading } = useSelector(
    (state: RootState) => state.auth
  );
  

  useEffect(() => {
    setIsMount(true);
    const payload = {
      mobile_number: "7667695703",
      country_code: "+91",
    };
    dispatch(requestOtp(payload));
  }, []);
  if (!isMount) null;
  return (
    <>
      <Head>
        <meta name="description" content="Vivek Kumar About Us" />
        <meta name="keywords" content="vivek kumar, vivek kumar portfolio, vivek kumar website, vivek kumar apni coding, apni coding vivek kumar, Web Development" />
      </Head>
      <LazyLoadComponent component={Banner} />
      <About />
      <Services />
      <Experience />
      <Expertise />
      <TimeLine />
      <ContactUsContainer />
      <Promo />
      <Footer />
      <ScrollToTop smooth />
    </>
  );
}
