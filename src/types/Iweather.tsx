export interface IWearth{
    id: number
    name : string
    main : {
      temp : number
      humidity : number
      temp_min : number
      temp_max : number
    }
    sys :{
      country : string
    }
    weather: {
      main: string
      description: string
    }
  }