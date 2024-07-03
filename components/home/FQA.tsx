import { Questions } from "@/constant";
import Link from "next/link";
import React from "react";

const FQA = () => {
  return (
    <section id="faq" className="flex justify-start items-start gap-10 flex-col sm:flex-row py-20">
      <div className="flex items-start justify-center flex-col gap-4 w-full sm:w-1/2">
        <h1 className="text-5xl leading-snug font-bold">
          Frequently Asked <br />
          <span>Questions</span>
        </h1>
        <p className="max-w-md font-medium  text-gray-400">Answers to the burning questions in your mind.</p>
        <Link href={"#contact"} className="border-none  rounded-full  px-4 py-2 sp">
          CONTACT ME
        </Link>
      </div>

      <div className="w-full sm:w-1/2">
        <div className="flex flex-col gap-4">
          {Questions.map(({ answer, question, id }) => (
            <label aria-description={question} className="block" htmlFor={id} key={id}>
              <input type="checkbox" className="peer" id={id} hidden />
              <span className="cursor-pointer w-full text-xl pb-4 text-white flex gap-2 items-center peer-checked:text-blue-500">
                {question}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="inline-flex ml-auto w-5 h-5 fill-white peer-checked:fill-blue-500 transition-transform">
                  <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                </svg>
              </span>
              <p className="h-0 peer-checked:h-auto max-h-0 peer-checked:max-h-full text-base text-gray-400 overflow-hidden  transition-all duration-500">{answer}</p>
            </label>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FQA;
