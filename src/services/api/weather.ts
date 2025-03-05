// Input submit //
export default function weather  (search:string ) {

    const urlapi = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=f8b7f129b88d301411ca8d0c3eb282a8`

return {
    getWeather: async () => {
        try{
          const res = await fetch(urlapi)
            return await res.json()
          }
          
        catch(err){
      }
}}
}