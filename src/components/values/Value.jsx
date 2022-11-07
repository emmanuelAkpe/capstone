import { Values } from "./data";
import ValueCard from "./ValueCard";



export const Value = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col lg:flex-row">
        <div className="max-w-xl pr-16 mx-auto mb-10">
          <h5 className="text-3xl md:text-5xl lg:text-6xl tracking-tight font-extrabold text-dzoma-blue-black">
            Our Values
          </h5>
          <p className="py-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            Our sole aim is to help you transport your bulk items. Our team is
            customer centric and we care deeply about making your bulk delivery
            a success. We are endless innovators and we are constantly looking
            for new ways to connect the dots and make your bulk delivery
            memorable. We become part of your team, true partners with a
            sustained commitment towards your business delivery goals.
          </p>
        </div>
        <div className="grid gap-5 row-gap-5 sm:grid-cols-2">
          {
            Values.map((value, index)=>{
              return(
                <div className="" key={index}>
                  <ValueCard value={value} />
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  );
};
