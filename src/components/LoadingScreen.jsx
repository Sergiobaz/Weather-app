import { useState } from "react" 



const LoadingScreen = () => {

const [isLoading, setIsLoading] = useState(true)

setTimeout(() => {
    setIsLoading(false)
}, 800);

  return (
  <> 
  {isLoading && (
    <div className="fixed inset-0 bg-[#373839] flex flex-col justify-center items-center gap-4 ">
            <img src="public/img/Vector.svg" alt="" width={125} height={125} />
            <span className=" font-lato text-xl ">Weather app</span>
            <div className="flex flex-row bg-white px-4 py-[2px] rounded-full gap-3">
                <img src="\LoadingScreenIcons\icon1.png" alt="" />
                <img src="/LoadingScreenIcons/icon2.png" alt="" />
                <img src="/LoadingScreenIcons/icon3.png" alt="" />
                <img src="/LoadingScreenIcons/icon4.png" alt="" />
                <img src="/LoadingScreenIcons/icon5.png" alt="" />
                <img src="/LoadingScreenIcons/icon6.png" alt="" />
                <img src="/LoadingScreenIcons/icon7.png" alt="" />
                <img src="/LoadingScreenIcons/icon8.png" alt="" />
            </div>
    </div>
  ) }
  </>
  )
}


export default LoadingScreen