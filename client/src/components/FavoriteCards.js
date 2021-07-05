import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
export class FavoriteCards extends Component {
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
            <Button variant="primary" onClick={() => this.props.handleRemoveFromFavorite(this.props)}>Remove from favorite</Button>
            <Button variant="primary" onClick={() => this.props.showUpdateForm(this.props)}>update</Button>
          </Card.Body>
        </Card>
      </div>
    )
  }
}

export default FavoriteCards
