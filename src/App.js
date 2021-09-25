import React from "react";
import axios from "axios";
import Weather from "./Weather";
import Movie from "./Movie";
import Location from "./Location";

import 'bootstrap/dist/css/bootstrap.min.css'; 
class App extends React.Component{

  constructor(props){
    super(props);
    this.state ={
      cityName:'',
     data:[],
      showLocInfo: false,
      movieData:[], 
      locData:[], 
      lat:'', 
      lng:''
    }
  }


  //`http://localhost:3001/weather?cityname=${this.state.cityName}`

  getWeather = async (e) => {
     e.preventDefault();
    await this.setState({
      cityName : e.target.city.value
       })

   let weatherUrl = `https://bashar-city-explorer-api.herokuapp.com/weather?cityname=${this.state.cityName}`;
   let response = await axios.get(weatherUrl);
   console.log(response.data);
   this.setState({
      data:response.data,
     showLocInfo: true
    })

    this.getMovie();
    this.getLocation();
  }


getMovie = async (e) =>{
  
  let movieUrl = `https://bashar-city-explorer-api.herokuapp.com/movie?searchQuery=${this.state.cityName}&page=1&api_key=${process.env.REACT_APP_MOVIE_KEY}`
  let response  = await axios.get(movieUrl);
  this.setState({
    movieData: response.data
  })
}
getLocation = async (e) =>{
  let locUrl = `https://www.mapquestapi.com/geocoding/v1/address?key=${process.env.REACT_APP_API_KEY}&location=${this.state.cityName}`
  let response = await axios.get(locUrl);
  console.log(response.data.results[0].locations[0].displayLatLng.lat);
  console.log(response.data.results[0].locations[0].displayLatLng.lng);
  this.setState({
  lat:response.data.results[0].locations[0].displayLatLng.lat, 
  lng:response.data.results[0].locations[0].displayLatLng.lng
  })

}
  render() {
    return(
        <div>

            <form onSubmit={this.getWeather}>
              <input type="text" name='city' />
              <input type="submit" value='Explore!' />
            </form>

            {this.state.showLocInfo&&
            <Location 
            Name={this.state.cityName}
            Lat={this.state.lat}
            Lng={this.state.lng}
           />
           }
           
            <img src={`https://www.mapquestapi.com/staticmap/v4/getmap?key=${process.env.REACT_APP_API_KEY}&size=600,400&zoom=13&center=${this.state.lat},${this.state.lng}`} alt="" />
 
            {
            this.state.data.map(e=>{
              
              return (
               
                <Weather show = {e}/>
               
                );
                
            })
           
            }

            {this.state.movieData.map(e=>{

              return(
                <Movie show = {e}/>
              );

            })
            }

           

       </div>
    )
  }
}

export default App;