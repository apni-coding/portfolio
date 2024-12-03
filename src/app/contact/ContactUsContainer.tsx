"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import {
  contactUs,
  resetContactUs,
} from "@/redux/slices/contactUsSlice/contactUsSlice";
import { AppDispatch, RootState } from "@/redux/store";

export default function ContactUsContainer() {
  const [isClient, setIsClient] = useState(false);
  const dispatch: AppDispatch = useDispatch();

  const {
    isLoading: loading,
    success,
    error,
  } = useSelector((state: RootState) => state.contact);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    comments: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const payload = {
        name: formData?.name,
        email: formData?.email,
        phone: formData?.phone,
        address: "Portfolio Contact",
        comment: formData?.comments,
      };
      await dispatch(contactUs(payload))
        .unwrap()
        .then(() => {
          resetState();
        });
    } catch (error) {}
  };

  const resetState = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      comments: "",
    });
    dispatch(resetContactUs());
  };
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }
  return (
    <div
      id="contact"
      className="contact-style-one-area default-padding bg-gray"
      style={{ marginTop: "-120px" }}
    >
      <div className="container">
        <div className="contact-style-one-items">
          <h1 className="fixed-text">Contact Me</h1>
          <div className="row">
            <div className="col-lg-6">
              <form
                id="contact-form"
                className="contact-form"
                onSubmit={handleSubmit}
              >
                <div className="form-group">
                  <input
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Name*"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Email*"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-control"
                    id="phone"
                    name="phone"
                    placeholder="Phone*"
                    type="text"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group comments">
                  <textarea
                    className="form-control"
                    id="comments"
                    name="comments"
                    placeholder="Your Message*"
                    required
                    value={formData.comments}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <button
                  className="btn-style-regular"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? "Submitting..." : "Get in Touch"}
                  <i className="fas fa-arrow-right"></i>
                </button>
                {/* {success && (
                  <div className="alert alert-success mt-3">
                    Thank you! Your message has been sent.
                  </div>
                )} */}
                {/* {error && (
                  <div className="alert alert-danger mt-3">{error}</div>
                )} */}
              </form>
            </div>
            <div className="contact-illustration">
              <Image
                src={"/img/illustration/5.png"}
                width={500} /* Set the desired width */
                height={637} /* Set the desired height */
                alt="User Profile"
              />
              <Image
                src={"/img/shape/13.png"}
                width={200} /* Example width */
                height={200} /* Example height */
                alt="Shape"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
