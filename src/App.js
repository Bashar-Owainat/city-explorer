import React from "react";
import axios from "axios";
import Weather from "./Weather";

import 'bootstrap/dist/css/bootstrap.min.css'; 
class App extends React.Component{

  constructor(props){
    super(props);
    this.state ={
      cityName:'',
     data1:[],
     data2:[],
     data3:[],
     data:[],
      showLocInfo: false
    }
  }

  // getLocation = async (e) => {
  //   e.preventDefault();
    
  //   await this.setState({
  //     cityName : e.target.city.value
  //   })
  //   
  //   let reqURl =  ;

  //   let locResult = await axios.get(reqURl);
    
  //   console.log('test', locResult.data[0].date);
  //   this.setState({
  //     data1:["Date:  "+ locResult.data[0].date," Descrption:  "+  locResult.data[0].description],

  //     data2:["Date:  "+ locResult.data[1].date," Descrption:  "+  locResult.data[1].description],

  //     data3:["Date:  "+ locResult.data[2].date," Descrption:  "+  locResult.data[2].description],
  //     showLocInfo: true
  //   })
  // }

  //`http://localhost:3001/weather?cityname=${this.state.cityName}`
  getWeather = async (e) => {
    e.preventDefault();
    await this.setState({
      cityName : e.target.city.value
       })

   let weatherUrl = `http://localhost:3001/weather?cityname=${this.state.cityName}`;
   let response = await axios.get(weatherUrl);
   console.log(response.data);
   this.setState({
      data:response.data,
     // showLocInfo: true
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
           

       </div>
    )
  }
}

export default App;
