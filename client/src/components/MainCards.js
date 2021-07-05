import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

export class MainCards extends Component {
  render() {
    return (
      <div style={{ maxWidth: '300px', display: 'inline-block' }}>
        <Card >
          <Card.Img variant="top" src={this.props.img} />
          <Card.Body>
            <Card.Title>{this.props.name}</Card.Title>
            <Card.Text>
              {this.props.level}
            </Card.Text>
            <Button variant="primary" onClick={() => this.props.handleAddToFavorite(this.props)}>Add To Favorite</Button>
          </Card.Body>
        </Card>
      </div>

    )
  }
}

export default MainCards
