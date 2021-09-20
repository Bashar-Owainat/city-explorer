import React from "react";
import axios from "axios";
class App extends React.Component{

  constructor(props){
    super(props);
    this.state ={
      cityName:'',
      locationResult: {},
      showLocInfo: false
    }
  }

  getLocation = async (e) => {
    e.preventDefault();
    
    await this.setState({
      cityName : e.target.city.value
    })

    let reqURl = `https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_API_KEY}&q=${this.state.cityName}&format=json`;

    let locResult = await axios.get(reqURl);
    

    this.setState({
      locationResult: locResult.data[0],
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
              <p>latitude: {this.state.locationResult.lat}</p>
              <p>longitude: {this.state.locationResult.lon}</p>

              <img src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_API_KEY}&center=${this.state.locationResult.lat},${this.state.locationResult.lon}&zoom=10`} alt="map" />

            
            </>

          }

       </div>
    )
  }
}

export default App;
