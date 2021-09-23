import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css'; 
class Weather extends Component {
    render() {
        return (
            <div>

                <Card
                    bg='info'
                    border="info"
                    style={{ width: '18rem', margin:'10px' }}
                    className="mb-2"
                >
                    <Card.Header></Card.Header>
                    <Card.Body>
                        <Card.Title> Weather </Card.Title>
                        <Card.Text>
                           <p>{this.props.show.date}</p>
                           <p>{this.props.show.description}</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default Weather