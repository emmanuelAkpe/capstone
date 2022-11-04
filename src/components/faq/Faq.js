/*eslint-disable*/
import React from "react";
import Question from "./Question";
import { questions } from "./data";

const Faq = () => {
  return (
    <section className="px-3 w-screen  py-8 md:pb-16 flex flex-col items-center justify-center">
      <h1 className="text-3xl md:text-5xl font-bold leading-relaxed">
        Frequently Asked Questions
      </h1>
      <div className="w-full md:w-1/2">
        {questions.map((question, index) => (
          <div
            key={index}
            data-aos="zoom-in-up"
            data-aos-duration="1000"
            data-aos-delaydata-aos-delay={`${index > 0 ? 200 * index : 0}`}
          >
            <Question
              title={question.title}
              answer={question.answer}
              key={question.id}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
