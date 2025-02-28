import { useState } from 'react'
import Lupa from './img/lupa.png'

function App() {
  const [search, setSearch] = useState<string>('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value)
  }

  const urlapi = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=f8b7f129b88d301411ca8d0c3eb282a8`

  async function callApi() {
    const res = await fetch(urlapi)
    if (res.status === 200) {
      const obj = await res.json()
      console.log(obj)
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    callApi()
  }

  return (
    <>
      <main className='h-64 w-56 ml-auto mr-auto mt-56 bg-violet-400 rounded-xl'>
        <form className='flex' onSubmit={handleSubmit}>
          <input
            className='border rounded-md mt-2 ml-3'
            type='text'
            placeholder='Cidade'
            onChange={handleChange}
          />
          <button className='size-5 mt-3 absolute ml-44' type='submit'>
            <img src={Lupa} alt='Search' />
          </button>
        </form>
      </main>
    </>
  )
}

export default App
