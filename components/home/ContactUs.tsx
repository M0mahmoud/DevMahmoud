"use client";
import { actionForm } from "@/action/Form";
import { LINKS } from "@/constant";
import Link from "next/link";
import React, { useRef, useState, useEffect } from "react";
import { useFormState, useFormStatus } from "react-dom";

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const ContactUs = () => {
  const [state, action] = useFormState(actionForm, undefined);
  const [errors, setErrors] = useState<FormErrors>({});
  const [showMessage, setShowMessage] = useState(false);
  const ref = useRef<HTMLFormElement>(null);

  // Show message for 1 second then hide it
  useEffect(() => {
    if (state?.message) {
      setShowMessage(true);
      const timer = setTimeout(() => {
        setShowMessage(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [state?.message]);

  // Validation function
  const validateForm = (formData: FormData): FormErrors => {
    const errors: FormErrors = {};
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    // Name validation
    if (!name.trim()) {
      errors.name = "Name is required";
    } else if (name.trim().length < 2) {
      errors.name = "Name must be at least 2 characters";
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      errors.email = "Email is required";
    } else if (!emailRegex.test(email)) {
      errors.email = "Please enter a valid email address";
    }

    // Message validation
    if (!message.trim()) {
      errors.message = "Message is required";
    } else if (message.trim().length < 10) {
      errors.message = "Message must be at least 10 characters";
    }

    return errors;
  };

  const handleSubmit = async (formData: FormData) => {
    // Clear previous errors
    setErrors({});

    // Validate form
    const validationErrors = validateForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // If validation passes, submit the form
    action(formData);
    ref?.current?.reset();
  };

  return (
    <section
      id="contact"
      className="flex justify-start items-start gap-6 flex-col sm:flex-row py-10"
    >
      <div className="flex items-start justify-center flex-col gap-6 w-full sm:w-1/2">
        <h2 className="text-5xl leading-10 font-bold">
          <span className="hsp">Get in touch</span>
        </h2>

        <p className="max-w-lg font-medium  text-gray-400">
          Have a project in mind? Looking to partner or work together? Reach out
          through the form and I&#39;ll get back to you in the next 24 hours.
        </p>
        <div className="flex justify-center items-start gap-5 flex-col">
          <Link
            aria-label="E-Mail"
            href={`mailto:${LINKS.email}`}
            className="flex items-center font-medium text-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              fill="#fff"
              className="block w-5 h-5 me-2"
            >
              <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
            </svg>
            {LINKS.secondEmail}
          </Link>
          <Link
            aria-label="E-Mail"
            href={`mailto:${LINKS.email}`}
            className="flex items-center font-medium text-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              fill="#fff"
              className="block w-5 h-5 me-2"
            >
              <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
            </svg>
            {LINKS.email}
          </Link>
          <Link
            aria-label="Send WhatsApp Message"
            href={LINKS.whatsApp}
            className="flex items-center font-medium text-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              fill="#fff"
              className="block w-5 h-5 me-2"
            >
              <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
            </svg>
            {LINKS.call}
          </Link>
          <Link
            aria-label="Send Telegram Message"
            href={LINKS.telegram}
            className="flex items-center font-medium text-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 496 512"
              fill="#fff"
              className="block w-5 h-5 me-2"
            >
              <path d="M248 8C111 8 0 119 0 256S111 504 248 504 496 393 496 256 385 8 248 8zM363 176.7c-3.7 39.2-19.9 134.4-28.1 178.3-3.5 18.6-10.3 24.8-16.9 25.4-14.4 1.3-25.3-9.5-39.3-18.7-21.8-14.3-34.2-23.2-55.3-37.2-24.5-16.1-8.6-25 5.3-39.5 3.7-3.8 67.1-61.5 68.3-66.7 .2-.7 .3-3.1-1.2-4.4s-3.6-.8-5.1-.5q-3.3 .7-104.6 69.1-14.8 10.2-26.9 9.9c-8.9-.2-25.9-5-38.6-9.1-15.5-5-27.9-7.7-26.8-16.3q.8-6.7 18.5-13.7 108.4-47.2 144.6-62.3c68.9-28.6 83.2-33.6 92.5-33.8 2.1 0 6.6 .5 9.6 2.9a10.5 10.5 0 0 1 3.5 6.7A43.8 43.8 0 0 1 363 176.7z" />
            </svg>
            @{new URL(LINKS.telegram).pathname.substring(1)}
          </Link>
        </div>
      </div>
      <div className="w-full sm:w-1/2">
        <form ref={ref} action={handleSubmit}>
          <div className="flex flex-col gap-3 mb-4">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              className={`p-2 text-base rounded-md border-none bg-dark-2 focus:border-none focus:outline-none focus-visible:outline-none ${
                errors.name ? "border-red-500 border" : ""
              }`}
            />
            {errors.name && (
              <span className="text-red-500 text-sm">{errors.name}</span>
            )}
          </div>
          <div className="flex flex-col gap-3 mb-4">
            <label htmlFor="email">Your E-Mail</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your e-Mail"
              className={`p-2 text-base rounded-md border-none bg-dark-2 focus:border-none focus:outline-none focus-visible:outline-none ${
                errors.email ? "border-red-500 border" : ""
              }`}
            />
            {errors.email && (
              <span className="text-red-500 text-sm">{errors.email}</span>
            )}
          </div>
          <div className="flex flex-col gap-3 mb-4">
            <label htmlFor="message">
              Tell me a bit more what you are looking for?
            </label>
            <textarea
              rows={5}
              name="message"
              id="message"
              placeholder="Enter your message"
              className={`p-2 text-base rounded-md border-none bg-dark-2 focus:border-none focus:outline-none focus-visible:outline-none max-h-96 ${
                errors.message ? "border-red-500 border" : ""
              }`}
            />
            {errors.message && (
              <span className="text-red-500 text-sm">{errors.message}</span>
            )}
          </div>
          {showMessage && state?.message && (
            <p className="text-green-500 py-2 transition-opacity duration-300">
              {state.message}
            </p>
          )}
          <SubmitForm />
        </form>
      </div>
    </section>
  );
};

export function SubmitForm() {
  const { pending } = useFormStatus();
  return (
    <button
      aria-disabled={pending}
      type="submit"
      className="capitalize border-none rounded-full px-5 py-2 sp disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {pending ? "Submitting..." : "Submit now"}
    </button>
  );
}

export default ContactUs;
