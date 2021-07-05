import React, { Component } from 'react'
import CardDeck from 'react-bootstrap/CardDeck'
import axios from 'axios'
import Spinner from 'react-bootstrap/Spinner'
import MainCards from './MainCards'
export class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokimonData: []
    }
  }
  componentDidMount = () => {
    axios.get(`http://localhost:8080/poki`).then(response => {
      this.setState({
        pokimonData: response.data
      });
    }).catch(error => alert(error.message))
  }
  handleAddToFavorite=(item)=>{
    const reqBody={
      name:item.name,img:item.img,level:item.level};
    axios.post(`http://localhost:8080/pokimon`,reqBody).then(response=>{
      if(response.data==="the data already exist"){
        alert('this Item exist already in your favorite list')
      }else{

        alert('Added Successfully')
      }
    }).catch(error=>alert(error.message));

  }
  render() {
    return (
      <div>

        {
          this.state.pokimonData.length > 0 ?
            <CardDeck>
              {this.state.pokimonData.map((value,idx)=>{
                return(
                  <MainCards
                  key={idx}
                  name={value.name}
                  img={value.img}
                  level={value.level}
                  handleAddToFavorite={this.handleAddToFavorite}
                  />
                );
              })}
            </CardDeck>
            :
            <Spinner animation="border" />
        }
      </div>
    )
  }
}

export default Main
