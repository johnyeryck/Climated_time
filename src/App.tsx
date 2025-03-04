import React, {useState} from 'react'
import { IWearth } from './types/typeweather'
import Lupa from './img/lupa.png'
import weather from './services/api/weather'
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
      <main className='h-64 w-56 ml-auto mr-auto mt-56 bg-violet-400 rounded-xl'>
        <form className='flex' onSubmit= {handleFetch}>
          <input
            className='border rounded-md mt-2 ml-3 shadow-xl '
            type='search'
            placeholder='  Cidade'
            onChange={(e: React.ChangeEvent<HTMLInputElement>)=> setSearch(e.currentTarget.value) }
            required
          />
          <button className='size-5 mt-3 absolute ml-44' type='submit'><img src={Lupa} alt='Search' /></button>
        </form>
         
        {weatherData && weatherData.length > 0 && weatherData[0].main ? (
          weatherData.map((data) => (
            <div key={data.id} className='mt-4 '>
                <h1 className='text-center text-2xl text-black font-extrabold' >{data.name},{data.sys?.country}</h1>
                <h2 className='text-center text-xl text-black'>{(data.main.temp - 273.15).toFixed(1)}°C</h2>
              <div className='flex mt-5 '>
                <p className='text-black mr-auto ml-auto' >Min:<br/>{(data.main.temp_min - 273.15).toFixed(1) }</p>
                <p className='text-black ml-auto mr-auto'>Max:<br/>{(data.main.temp_max - 273.15).toFixed(1) }</p> 
              </div>
            </div>)
          ))
         : (
          <p className='text-center mt-4'>Busque a localização</p>
          )}
      </main>
    </>
  )
}

export default App
