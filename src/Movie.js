import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css'; 

class Movie extends Component {
    render() {
        return (
            <div>

                <Card
                    bg='danger'
                    border="info"
                    style={{ width: '18rem', margin:'10px' }}
                    className="mb-2"
                >
                    <Card.Header></Card.Header>
                    <Card.Body>
                        <Card.Title> Weather </Card.Title>
                        <Card.Text>
                           <p>Title: {this.props.show.title}</p>
                           <p>Overview: {this.props.show.overview}</p>
                           <p>AverageVotes: {this.props.show.averageVotes}</p>
                           <p>TotalVotes: {this.props.show.totalVotes}</p>  
                           <img src={this.props.show.imageUrl} alt="" width="200px" />
                           <p>Popularity: {this.props.show.popularity}</p>
                           <p>ReleasedOn: {this.props.show.releasedOn}</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default Movie;