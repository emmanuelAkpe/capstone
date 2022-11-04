/*eslint-disable*/
import React, { useState, useEffect } from "react"
import { FaAngleDown, FaAngleUp } from "react-icons/fa"
import AOS from "aos"

const Question = ({ title, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false)

  const handleClick = () => {
    setShowAnswer(!showAnswer)
  }

  useEffect(() => {
    AOS.init({ once: true })
  }, [])
  return (
    <div
      className="w-full border-b border-oya-ghana-border  pt-4 mb-4"
      data-aos='fade-in'
      data-aos-duration='1000'
    >
      <div className='flex justify-between items-center cursor-pointer' onClick={handleClick}>
        <h4 className='text-oya-ghana-header-h7 font-semibold '>{title}</h4>
        <span
          className=' h-12 my-2 w-12 rounded-full flex items-center justify-center cursor-pointer'>
          {showAnswer ? (
            <FaAngleUp className='text-oya-ghana-header-h7' />
          ) : (
            <FaAngleDown className='text-oya-ghana-header-h7' />
          )}
        </span>
      </div>
      <div className='question-answer'>
        {showAnswer && <p className='text-oya-ghana-header-h7 pb-6 pt-2 text-oya-ghana-faded-gray'>{answer}</p>}
      </div>
    </div>
  )
}

export default Question
