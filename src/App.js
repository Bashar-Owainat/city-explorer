import React from "react";
import axios from "axios";
import Weather from "./Weather";
import Movie from "./Movie";

import 'bootstrap/dist/css/bootstrap.min.css'; 
class App extends React.Component{

  constructor(props){
    super(props);
    this.state ={
      cityName:'',
     data:[],
      showLocInfo: false,
      movieData:[]
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
  }


getMovie = async (e) =>{
  
  let movieUrl = `https://bashar-city-explorer-api.herokuapp.com/movie?searchQuery=${this.state.cityName}&page=1&api_key=${process.env.REACT_APP_MOVIE_KEY}`
  let response  = await axios.get(movieUrl);
  this.setState({
    movieData: response.data
  })
}

  render() {
    return(
        <div>

            <form onSubmit={this.getWeather}>
              <input type="text" name='city' />
              <input type="submit" value='Explore!' />
            </form>

            
            {this.state.data.map(e=>{
              
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