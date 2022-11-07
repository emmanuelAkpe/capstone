import React from 'react'

const TeamCard = ({team}) => {
  return (
   
    <div className="grid sm:grid-cols-3">
    <div className="relative w-full h-48 max-h-full rounded shadow sm:h-auto">
      <img
        className="absolute object-cover w-full h-full rounded"
        src={team.img}
        alt="Person"
      />
    </div>
    <div className="flex flex-col justify-center mt-5 sm:mt-0 sm:p-5 sm:col-span-2">
      <p className="text-lg font-bold">{team.name}</p>
      <p className="mb-4 text-xs text-gray-800">{team.title}</p>
      <p className="mb-4 text-sm tracking-wide text-gray-800">
        {team.experience}
      </p>
    </div>
  </div>
  )
}

export default TeamCard