import { useState } from "react";
import {tabsData} from './tabsData'

export function Tabs() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  return (
    <div className="bg-dzoma-blue-black flex items-center justify-center flex-col rounded-2xl h-screen">
        <div className="w-3/4">
            <h1 className="text-2xl md:text-3xl lg:text-4xl  tracking-tight font-extrabold text-dzoma-yellow">Our core values are the north stars that guide our behaviours, processes and mindset</h1>
        </div>

      {/* Show active tab content. */}
      <div className="py-4 flex flex-col justify-center items-center lg:flex-row lg:gap-5 gap-3">
        <div className="bg-white rounded-full flex-1 flex items-center justify-center transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300">
        <img src={tabsData[activeTabIndex].img} alt="" className="w-48 h-48" />
        </div>
       <div className="flex flex-col justify-center items-center">
        <h1 className="text-2xl md:text-3xl lg:text-4xl tracking-tight font-extrabold text-white py-3">{tabsData[activeTabIndex].label}</h1>
       <p className="text-white w-80 text-base ">{tabsData[activeTabIndex].content}</p>
       </div>
      </div>
      <div className="flex space-x-3 ">
        {/* Loop through tab data and render button for each. */}
        {tabsData.map((tab, idx) => {
          return (
            <button
              key={idx}
              className={`py-2  transition-colors duration-300 ${
                idx === activeTabIndex
                  ? "text-dzoma-yellow"
                  : "text-white"
              }`}
              // Change the active tab on click.
              onClick={() => setActiveTabIndex(idx)}>
              {tab.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}