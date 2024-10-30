"use client";
import { requestOtp } from "@/redux/slices/authSlice/authSlice";
import { AppDispatch, RootState } from "@/redux/store";

import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";

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
  return <>{isLoading && <h1>Loading...</h1>}</>;
}
