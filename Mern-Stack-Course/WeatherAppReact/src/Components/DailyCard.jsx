import React from 'react'
import { useState } from 'react'
import HourlyData from './HourlyData'

function DailyCard({id,Day,Date,currentTemperatureIcon,currentTemperature,DayIcon,DateTemperatureRange,hourlyData}) {
 
    function DisplayTime(dateTimeString) 
    {
       // Split the datetime string to extract the time part
       const time = dateTimeString.split(' ')[1];
       return time;   
    }

    const [isTimeSlotVisible, setIsTimeSlotVisible] = useState(false);

  function ToggleTimeSlots() {
    setIsTimeSlotVisible(prevState => !prevState);
  }

    return (
    <div>
         <button id="ButtonDay" onClick={ToggleTimeSlots} className="w-full bg-white border-solid border-2 border-black flex flex-row justify-between px-1">                
               <div className="flex flex-col my-3">
                <h1 id="Day" className="text-lg sm:text-xl font-bold text-left">{Day}</h1>
                <h1 id="Date" className="text-sm sm:text-base font-semibold text-left">{Date}</h1>
                </div>

                <div className="flex flex-row my-3 gap-1 place-items-center">
                    <img id="DayIcon" src={DayIcon}/>
                    <h2 id="DateTemperatureRange" className="text-lg sm:text-2xl font-bold">{DateTemperatureRange}</h2>
                </div>

                {
                    id == 1 ? 
                    <div className="flex flex-row my-3 gap-1 place-items-center">
                    <img id="currentTemperatureIcon" src={currentTemperatureIcon} />
                    <h2 id="currentTemperature" className="text-lg sm:text-2xl font-bold">{currentTemperature}</h2>
                </div>
                :<span></span>
                }
               
               
            </button>
            <div id="TimeSlot"  style={{ display: isTimeSlotVisible ? 'grid' : 'none' }} className="bg-white grid-cols-2 gap-2 place-items-center py-3 ">
                <div className="font-semibold text-2xl">Hour</div>
                <div className="font-semibold text-2xl">Temperature</div>                
                {
                    hourlyData.map((value,index)=> 
                    {
                        return <HourlyData key={index} hour={`${value.temp_c}°C`} temp={`${DisplayTime(value.time)}`} imgUrl={`${value.condition.icon}`} />
                    })
                }
                
            </div>   

    </div>
  )
}

export default DailyCard
