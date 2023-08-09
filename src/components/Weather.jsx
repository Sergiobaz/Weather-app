import { useState } from "react";



const Weather = (weatherInfo) => {

  const info = weatherInfo.weatherInfo;



  const [isCelcius, setIsCelcious] = useState(true)
  
  const kelvinToCelcius = (tempKelvin) => {
    return (tempKelvin - 273.15).toFixed(1)
  }

  const kelvinToFahrenheit = (tempKelvin) => {
    return ((tempKelvin - 273.15)* 9/5 +32).toFixed(1)
  }

  const handleChangeUnitTemp = () => {
    setIsCelcious(!isCelcius)
  }

  const resultTempConversion = () => {
    return isCelcius 
    ? kelvinToCelcius(info?.main.temp) 
    :kelvinToFahrenheit(info?.main.temp)
  }

  return (
    <section className={"text-center"}>
      <h2 className="p-3 text-black text-[24px] font-black" >{info?.sys.country}, {info?.name}</h2>

      <section className="grid gap-4 sm:grid-cols-[auto_auto]">
        
        <section className="bg-white/60 p-2 rounded-2xl grid grid-cols-2 sm:items-center items-center">
          <h4 className=" text-[#3E3E3E] text-[22px] col-span-2">{info?.weather[0].description}</h4>
          <span className=" text-black text-[60px] " >{resultTempConversion()}º{isCelcius ? 'C' : "F"}</span>
          <div>
            <img
              src={`https://openweathermap.org/img/wn/${info?.weather[0].icon}@4x.png`}
              alt=""
            />
          </div>
        </section>

        <section className="bg-white/50 p-2 py-4 rounded-2xl grid grid-cols-3 items-center sm:grid-cols-1">
          <article className="flex gap-2 items-center">
            <div className=" w-[18x]">
              <img src="/wind.png" alt="" />
            </div>
            <span className="text-black text-[16px] font-bold">{info?.wind.speed} m/s</span>
          </article>

          <article className=" py-4  border-[2px] border-y-0 border-x-[(0, 0, 0, 0.23)] flex gap-2 items-center sm:px-4  sm:border-[2px] sm:border-x-0 sm:border-y-[(0, 0, 0, 0.23)] ">
            <div className="w-[18x] ">
              <img src="/humidity.png" alt="" />
            </div>
            <span className="text-black text-[16px] font-bold">{info?.main.humidity} %</span>
          </article>

          <article className="flex gap-2 items-center">
            <div className="w-[18x]">
              <img src="/pressure.png" alt="" />
            </div>
            <span className="text-black text-[16px] font-bold">{info?.main.pressure} hPa</span>
          </article>
        </section>
      </section>

      <button onClick={handleChangeUnitTemp} className="rounded-full mt-4 bg-white text-[#4580BA] py-1 px-6">Change to {isCelcius ? 'C' : "F"}</button>

    </section>
  );
};

export default Weather;
