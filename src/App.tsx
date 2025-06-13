import React, { useState} from 'react'
import { IWearth } from './types/typeweather'
import weather from './services/api/weather'
import { ObjImg } from './types/typeweather'
import Nfound from './img/imgweather/no-results.png'

function App() {
  const [search, setSearch] = useState<string>('')
  const [weatherData, setWeatherData] = useState<IWearth[]>([])

  const handleFetch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = await weather(search).getWeather()
    setWeatherData([data])
  }

  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="w-60 rounded-xl bg-violet-500 p-4 hover:shadow-xl hover:shadow-purple-700">
        <form className="mb-4" onSubmit={handleFetch}>
          <div className="relative">
            <input
              aria-label="Search location"
              autoComplete="on"
              list="browsers"
              className="w-full border rounded-md p-2 dark:bg-gray-800 text-white border-[#8707ff] hover:border-violet-600"
              type="search"
              placeholder="Local"
              onChange={(e) => setSearch(e.currentTarget.value)}
              required
            />
            <button 
              type="submit"
              aria-label="Search"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 size-5"
            />
          </div>
        </form>

        {weatherData.length > 0 && weatherData[0].cod !== 200 && (
          <div className="text-center">
            <img src={Nfound} alt="Location not found" className="size-20 mx-auto"/>
            <p>Local não encontrado</p>
          </div>
        )}

        {weatherData?.length > 0 && weatherData[0].main && (
          weatherData.map((data) => (
            <article key={data.id} className="mb-8">
              <div className="bg-black text-white rounded-2xl p-4 w-48 mx-auto">
                {Object.entries(ObjImg).map(([key]) =>
                  key === data.weather[0].description && (
                    <img 
                      key={key}
                      src={ObjImg[key]}
                      alt={data.weather[0].description}
                      className="mx-auto size-20"
                    />
                  )
                )}
                <h1 className="text-center text-2xl font-extrabold">
                  {data.name}, {data.sys?.country}
                </h1>
                <p className="text-center text-xl">
                  {(data.main.temp - 273.15).toFixed(1)}°C
                </p>
              </div>
              
              <div className="flex mt-4 justify-around">
                <div>
                  <p className="text-black">
                    Min:<br/>{(data.main.temp_min - 273.15).toFixed(1)}°C
                  </p>
                </div>
                <div>
                  <p className="text-black">
                    Max:<br/>{(data.main.temp_max - 273.15).toFixed(1)}°C
                  </p>
                </div>
              </div>
            </article>
          ))
        )}

        {weatherData.length === 0 && (
          <p className="text-center mt-4">Busque a localização</p>
        )}
      </div>
    </main>
  )
}

export default App