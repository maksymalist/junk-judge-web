"use client";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Props = {};

const NewsletterForm = (props: Props) => {
  const [loading, setLoading] = useState<boolean>(false);
  const subscribe_email = async (e: any) => {
    try {
      e.preventDefault();
      setLoading(true);
      const email = e.target.email.value;

      if (!email) {
        toast.error("Error! Please enter a valid email.");
        setLoading(false);
        return;
      }

      await fetch("https://trashapp.me/api/subscribe", {
        body: JSON.stringify({
          email: email,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        credentials: "include",
      });

      toast.success("Success! 🎉 You are now subscribed to the newsletter.");
      setLoading(false);
    } catch (error) {
      toast.error("Error! Please try again later.");
      setLoading(false);
    }
  };
  return (
    <>
      <ToastContainer />
      <div className="bg-black dark:border-white border-2 p-4 rounded-lg rotate-[5deg]">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px border-l-white border-t-white border-l-2 border-t-2">
          <div className="mx-auto max-w-screen-md sm:text-center">
            <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl text-white">
              Join our waitlist 📬
            </h2>
            <p className="mx-auto mb-8 max-w-2xl font-light text-gray-500 md:mb-12 sm:text-xl dark:text-gray-400">
              Stay up to date with the roadmap progress, announcements and
              exclusive and get{" "}
              <span className="font-bold text-white">
                early access to the app
              </span>
              .
            </p>
          </div>
        </div>
        <form
          className="border-r-white border-b-white border-r-2 border-b-2 pb-6 p-4"
          onSubmit={subscribe_email}
        >
          <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
            <div className="relative w-full">
              <label className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Email address
              </label>
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
              </div>
              <input
                className="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Enter your email"
                type="email"
                id="email"
              />
            </div>
            <div>
              <button
                type="submit"
                disabled={loading}
                className={
                  loading
                    ? "py-3 px-5 w-52 text-sm font-bold text-center bg-slate-400 text-white rounded-lg border cursor-pointer bg-primary-700 border-primary-600 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    : "py-3 px-5 w-36 text-sm font-bold text-center bg-green-400 text-white rounded-lg border cursor-pointer bg-primary-700 border-primary-600 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                }
              >
                get access 🚀
              </button>
            </div>
          </div>
          <div className="mx-auto max-w-screen-sm text-sm text-left text-gray-500 newsletter-form-footer dark:text-gray-300">
            We care about the protection of your data.{" "}
            <a
              href="#"
              className="font-medium text-primary-600 dark:text-primary-500 hover:underline"
            >
              Read our Privacy Policy
            </a>
            .
          </div>
        </form>
      </div>
    </>
  );
};

export default NewsletterForm;
