import React from "react";
import axios from "axios";
class App extends React.Component{

  constructor(props){
    super(props);
    this.state ={
      cityName:'',
     data1:[],
     data2:[],
     data3:[],
      showLocInfo: false
    }
  }

  getLocation = async (e) => {
    e.preventDefault();
    
    await this.setState({
      cityName : e.target.city.value
    })

    let reqURl = `http://localhost:3001/weather?cityname=${this.state.cityName}`;

    let locResult = await axios.get(reqURl);
    
    console.log('test', locResult.data[0].date);
    this.setState({
      data1:["Date:  "+ locResult.data[0].date," Descrption:  "+  locResult.data[0].description],

      data2:["Date:  "+ locResult.data[1].date," Descrption:  "+  locResult.data[1].description],

      data3:["Date:  "+ locResult.data[2].date," Descrption:  "+  locResult.data[2].description],
      showLocInfo: true
    })
  }


  render() {
    return(
        <div>

            <form onSubmit={this.getLocation}>
              <input type="text" name='city' />
              <input type="submit" value='Explore!' />
            </form>

          

          {this.state.showLocInfo &&
            <>
              <p>City Name: {this.state.cityName}</p>
              <p> {this.state.data1}</p>
              <p> {this.state.data2}</p>
              <p> {this.state.data3}</p>
             

             

            
            </>

          }

       </div>
    )
  }
}

export default App;
