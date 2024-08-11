import { useState } from 'react'
import Search from './Images/Search.png'
import Sun from './Images/Sun.png'
import DailyCard from './Components/DailyCard'
import Choice from './Components/Choice';
import { themeContext } from './Context/ThemeContext';
function App() {


  const places = [
    {
        key: "Islamabad"
    },
    {
        key: "Rawalpindi"
    },
    {
        key: "Karachi"
    },
    {
        key: "Lahore"
    }
];

const oninput = (e) => 
{
    let text = e.target.value + "";
    text = text.toUpperCase();
    text = text.trim();    
    let matchedValues = [];
    for (let index = 0; index < places.length; index++) 
    {
        let currentPlace = places[index];

        let matched = true;
        if(text.length > 0)
        {   
            for (let k = 0; k < text.length; k++) 
            {
                let placeKey = currentPlace.key[k];
                if(text[k] != placeKey.toUpperCase())
                {
                    matched = false;
                    break;
                }            
            }
        }
        else
        {
            matched = false;
        }

        if(matched)
        {
            matchedValues.push(currentPlace);
        }
    }
    
    console.log(matchedValues)

    DeleteAllButtons();
    for (let e = 0; e < matchedValues.length; e++) 
    {
        AddPlaceButton (matchedValues[e]);        
    }   
    
}

const [choices, setChoices] = useState([])
let temp = [...choices];
function DeleteAllButtons()
{
  let range = choices.length;
  temp = [...choices];
  console.log(range);
   for (let i = 0; i < range; i++) 
   {
    temp.pop();    
   }

   setChoices(temp)
}

function AddPlaceButton (selectedPlace)
{
    // let newButton = document.createElement("Button")
    // dropDown.append(newButton);
    // newButton.style.paddingTop = "3px";
    // newButton.style.paddingBottom = "3px";
    // newButton.style.color = "white";
    // newButton.style.width = "100%";
    // newButton.textContent = selectedPlace.key;
    // //newButton.onclick = () => {PlaceSelected(selectedPlace)}

    // buttons.push(newButton);

    temp.push(selectedPlace);
    console.log(selectedPlace.key)
    setChoices(temp)

    console.log("Chinces : ")
    console.log(choices);
}

const [forecastDayData, setForecastDayData] = useState([])
const [currentTemperatureIcon, setcurrentTemperatureIcon] = useState("")
const [currentTemperature, setcurrentTemperature] = useState("")

async function PlaceSelected(selectedPlace)
{        
   //placeName.innerHTML = selectedPlace.key; 

   const apiKey = '69d91b41f62e4140b46135934240508'; // Replace with your WeatherAPI key
   const location = selectedPlace.key; // Replace with the city you want the weather for

   // WeatherAPI 7-day forecast endpoint
   const url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=7`;



   //Fetch the weather data
   fetch(url)
       .then(response => response.json())
       .then(data => {
           // Process and display the data
           console.log(data);
          
           const forecastData = data.forecast.forecastday; // Array of daily forecast objects
           
           placeName.innerHTML = data.location.name;

           setcurrentTemperatureIcon(data.current.condition.icon);
           setcurrentTemperature(`${data.current.temp_c}°C`);
           

          return forecastData;       
         
       })
       .then((forecastData)=>
       {
        setForecastDayData(forecastData);
           //temperatureDiv.style.visibility = 'visible';
       })
       .catch(error => console.error('Error fetching the weather data:', error));

}

function getDayFromDate(dateString) {
   const date = new Date(dateString); // Create a Date object from the date string
   const options = { weekday: 'long' }; // Format option for full weekday name
   const dayOfWeek = new Intl.DateTimeFormat('en-US', options).format(date); // Get the day name
   return dayOfWeek;
}

 const [theme, setTheme] = useState('light');
 function handelTheme() 
 {
  
  if(theme=='light')
    setTheme('dark')
  else
    setTheme('light')  
  
}
  
  return (
    <themeContext.Provider value={theme}>
    <div className="bg-[url('https://149842022.v2.pressablecdn.com/travelify/wp-content/uploads/sites/53/2013/05/Spain-Plaza-de-Cibeles-Madrid-1.jpg')]
bg-cover bg-no-repeat" >
       <div className=" w-full h-[150px] place-items-center">
    
    <nav className="h-[50px] w-full">
        <div className="flex flex-row m-auto md:ml-52  place-items-center gap-2
                    w-full md:max-w-[400px] h-full justify-center ">  
                    <img src={Sun} className="mt-1 w-5" /> 
                    <p className="font-bold text-2xl text-black dark:text-white">Weather App</p>             
        </div> 

       
    </nav> 

        <div
        className="w-[80%] h-[30%] rounded-md bg-white
         xl:w-[45%] lg:w-[45%] md:w-[65%] sm:w-[55%] 
        flex flex-row items-center gap-2 px-2 m-auto"
        >
         <img src={Search} alt="" className="w-7 h-7" />
         <input id="searchBar" type="text" placeholder="Enter Place" className="px-3 w-full" onInput={oninput} />
         
        </div>
        <div id="DropDown" 
        className="flex flex-col gap-2 place-items-center
                 w-[70%] rounded-md bg-[#8c8c8c]
                 xl:w-[40%] lg:w-[40%] md:w-[55%] sm:w-[45%] 
                 px-2 m-auto">                    
           { 
            choices.map((choice) => {  
                    return <Choice 
                    key={choice}
                    PlaceSelected={PlaceSelected}
                    choice={choice} />    
                })
              }
        </div>
    </div>

      <div id="TemperatureDiv" className="w-[97.5%] h-[%13]
    xl:w-[45%] lg:w-[55%] md:w-[65%] sm:w-[75%]
    rounded-md place-items-center m-auto mt-5 mb-10 py-1">
        <div>
            <h2 id="placeName" className="text-3xl font-bold text-center py-5 text-white"></h2>
            {
              forecastDayData.map((value,i) =>
              {
                let day = value;

                
                 const date = new Date(day.date);
                const dayOfWeek = getDayFromDate(date);
                
                const description = day.day.condition.text; // Weather description

                //dayField.innerHTML = dayOfWeek;
                //dateField.innerHTML = date.toLocaleDateString();
                
                
                let hours = day.hour
               
                return <DailyCard id={i+1} 
                Day={dayOfWeek}
                Date={date.toLocaleDateString()}
                currentTemperatureIcon={currentTemperatureIcon}
                currentTemperature={currentTemperature}
                DayIcon={day.day.condition.icon}
                DateTemperatureRange={`${day.day.mintemp_c}°C - ${day.day.maxtemp_c}°C`}
                hourlyData={hours} />
              })
             
            }
             
        </div>
    </div>
    </div>
    </themeContext.Provider>
  )
}

export default App
