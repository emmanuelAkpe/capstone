import React from 'react'

const ValueCard = ({value}) => {
  return (
     
    <div className="max-w-md">

    <h6 className="text-center sm:text-left text-xl md:text-2xl font-bold leading-snug">{value.title}</h6>
    <p className=" text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
      {value.desc}
    </p>
  </div>
  )
}

export default ValueCard