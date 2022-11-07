import { team } from "./data";
import TeamCard from "./TeamCard";

export const Team = () => {
    return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="mx-auto mb-10 lg:max-w-xl sm:text-center">
          <p className="text-2xl md:text-3xl lg:text-4xl  tracking-tight font-extrabold text-dzoma-blue-black">
          We are young talented people working together to deliver value
          </p>
        </div>
        <div className="grid gap-10 mx-auto lg:grid-cols-2 lg:max-w-screen-lg">
            {
                team.map((team, index)=>{
                    return(
                        <div className="" key={index}>

                            <TeamCard team={team}/>
                        </div>
                    )
                })
            }
        </div>
      </div>
    );
  };