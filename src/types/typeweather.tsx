import Sun from '../img/imgweather/01d.png'
import Neve from '../img/imgweather/13d.png'
import few from '../img/imgweather/02d.png'
import scattered from '../img/imgweather/03d@2x.png'
import Chuva from '../img/imgweather/10d.png'
import Broken from '../img/imgweather/04d.png'
import Shower from '../img/imgweather/09d@2x.png'
import Mist from '../img/imgweather/50d@2x.png'
import Thunder from '../img/imgweather/11d@2x.png'
import Overclast from '../img/imgweather/cloudy.png'
export interface IWearth{
    id: number
    name : string
    main : {
      temp : number
      humidity : number
      temp_min : number
      temp_max : number
    }
    cod : number
    sys :{
      country : string
    }
    weather: {
      main: string
      description: string
    }
  }


  export const ObjImg : { [key: string]: any }= {
    'clear sky' : Sun,
    'few clouds' : few,
    'scattered clouds' : scattered,
    'broken clouds' : Broken,
    'shower rain' : Shower,
    'rain' : Chuva,
    'thunderstorm' : Thunder,
    'snow' : Neve,
    'mist' : Mist,
    'overcast clouds' : Overclast
  }
