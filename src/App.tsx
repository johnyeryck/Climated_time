import React, { useState} from 'react'
import { IWearth } from './types/typeweather'
import weather from './services/api/weather'
import { ObjImg } from './types/typeweather'
import Nfound from './img/imgweather/no-results.png'
function App() {
  const [search, setSearch] = useState<string>('')
  const [weatherData , setWeatherData] = useState<IWearth[]>([]) 
  // Input submit //
  const handleFetch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
      const data = await weather(search).getWeather()
      setWeatherData([data])
    }


    return (
      <>
      <main className='h-auto  w-60 ml-auto mr-auto mt-56  rounded-xl  bg-violet-500  hover:shadow-xl hover:shadow-purple-700 '>
        <form className='flex ' onSubmit= {handleFetch}>
          
          <input
            autoComplete='on'
            list='browsers'
            className='border rounded-md mt-2 ml-3 shadow-xl mb-6 dark:bg-gray-800 text-white border[#8707ff] hover:border-violet-600 px-2  '
            type='search'
            placeholder='Local'
            onChange={(e: React.ChangeEvent<HTMLInputElement>)=> setSearch(e.currentTarget.value) }
            required
            
          />
        
          <button className='size-5 mt-3 absolute ml-44' type='submit' ></button>
        </form>
        {weatherData.length >0 && weatherData[0].cod != 200 ? (
          <div >
            <img src={Nfound} className='size-20 ml-auto mr-auto'/>
            <p className='text-center'>Local não encontrado</p>
          </div>
        ): null}
        {weatherData && weatherData.length > 0 && weatherData[0].main ? (
          weatherData.map((data) => (
            <section key={data.id} className='mb-48 '>
              <div className='bg-black text-white  rounded-2xl h-auto w-48 ml-auto mr-auto bg'>
              {  Object.entries(ObjImg).map(([key])=>
              key === data.weather[0].description ? (
                <img src={ObjImg[key] } key={key} className='ml-auto mr-auto size-20'
                
                /> 
                
              ) : null
            )}  
                <h1 className='text-center text-2xl font-extrabold '  >{data.name},{data.sys?.country}</h1>
                <h2 className='text-center text-xl '>{(data.main.temp - 273.15).toFixed(1)}°C</h2>
              </div>
              <footer className=' flex mt-4'>
                <div className='w-full  '>
                    <p className='text-black  ml-10' >Min:<br/>{(data.main.temp_min - 273.15).toFixed(1) }</p>
                </div> 
                  <div className='w-full '> 
                      <p className='text-black  ml-10 '>Max:<br/>{(data.main.temp_max - 273.15).toFixed(1) }</p> 
                  </div>
              </footer>
            </section>)
          ))
         : weatherData.length == 0 ?(
           <p className='text-center mt-4'>Busque a localização</p>

         ): null
          }
      </main>
    </>
  )
}

export default App
