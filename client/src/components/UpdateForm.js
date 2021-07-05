import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
export class UpdateForm extends Component {
  render() {
    return (
      <div>
        <Form onSubmit={this.props.updateApi}>
          <Form.Group controlId="newName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder={this.props.name} required/>
          </Form.Group>
          <Form.Group controlId="newImage">
            <Form.Label>Image</Form.Label>
            <Form.Control type="text" placeholder={this.props.img} required/>
          </Form.Group>
          <Form.Group controlId="newLevel">
            <Form.Label>Level</Form.Label>
            <Form.Control type="text" placeholder={this.props.level} required/>
          </Form.Group>
          <Button variant="primary" type="submit">
            Update
          </Button>
        </Form>
      </div>
    )
  }
}

export default UpdateForm
