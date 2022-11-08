/*eslint-disable*/
import React from "react";
import Question from "../../components/faq/Question";
import { questions } from "./data";

const Faq = () => {
  return (
    <div className="max-w-7xl mx-auto lg:mt-6 mt-3 drive">
      <div className="w-full pb-4 sm:pb-10 md:pb-12 lg:pb-16 px-4 sm:pl-10 md:pl-12 lg:pl-16">
        <div className="pb-5 md:pb-10">
          <h2 className="text-3xl md:text-5xl lg:text-6xl tracking-tight font-extrabold text-dzoma-blue-black">
            Frequently Asked Questions
          </h2>
          <p className="py-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            Learn how to use Dzoma, fix a problem, and get answers to your
            questions.
          </p>
        </div>

        <div className="w-full">
          {questions.map((question, index) => (
            <div
              key={question.id}
              data-aos="fade-in"
              data-aos-duration="1500"
              data-aos-delaydata-aos-delay={`${index > 0 ? 200 * index : 0}`}
            >
              <Question title={question.title} answer={question.answer} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
