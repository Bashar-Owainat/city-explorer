import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css'; 

class Location extends Component {
    render() {
        return (
            <div>

                <Card
                    bg='success'
                    border="info"
                    style={{ width: '18rem', margin:'10px' }}
                    className="mb-2"
                >
                    <Card.Header></Card.Header>
                    <Card.Body>
                        <Card.Title> Location </Card.Title>
                        <Card.Text>
                            <p>City Name: {this.props.Name}</p>
                           <p>Lat: {this.props.Lat}</p>
                           <p>Lng: {this.props.Lng}</p>
                          
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default Location;