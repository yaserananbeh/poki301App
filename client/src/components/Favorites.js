import React, { Component } from 'react'
import CardDeck from 'react-bootstrap/CardDeck'
import axios from 'axios'
import Spinner from 'react-bootstrap/Spinner'
import FavoriteCards from './FavoriteCards'
import UpdateForm from './UpdateForm'

export class Favorites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      FavoritesData: [],
      updateForm: false,
      selectedToUpdate:[]
    }
  }
  componentDidMount = () => {
    axios.get(`http://localhost:8080/pokimon`).then(response => {
      this.setState({
        FavoritesData: response.data
      });
    }).catch(error => alert(error.message))
  }
  handleRemoveFromFavorite = async (item) => {
    const name = item.name;
    await axios.delete(`http://localhost:8080/pokimon/${name}`).then(response => {
      console.log(response.data)
    }).catch(error=>alert(error.message))
    axios.get(`http://localhost:8080/pokimon`).then(response => {
      this.setState({
        FavoritesData: response.data
      });
    }).catch(error => alert(error.message))

  }
  showUpdateForm = (item) => {
    this.setState({
      updateForm: !this.state.updateForm,
      selectedToUpdate:item
    })
  }
  updateApi= async (e)=>{
    e.preventDefault();
    const newName=e.target.newName.value;
    const newImage=e.target.newImage.value;
    const newLevel=e.target.newLevel.value;
    const reqBody={
      name:newName,
      img:newImage,
      level:newLevel
    }
    await axios.put(`http://localhost:8080/pokimon/${this.state.selectedToUpdate.name}`,reqBody).then(response => {
      console.log(response.data)
    }).catch(error=>alert(error.message))
    axios.get(`http://localhost:8080/pokimon`).then(response => {
      this.setState({
        updateForm: !this.state.updateForm,
        FavoritesData: response.data
      });
    }).catch(error => alert(error.message))

  }
  render() {
    return (
      <div>
        {
          this.state.updateForm && <UpdateForm
            name={this.state.selectedToUpdate.name}
            img={this.state.selectedToUpdate.img}
            level={this.state.selectedToUpdate.level}
            updateApi={this.updateApi}
          />
        }
        {
          this.state.FavoritesData.length > 0 ?
            <CardDeck>
              {this.state.FavoritesData.map((value, idx) => {
                return (
                  <FavoriteCards
                    key={idx}
                    name={value.name}
                    img={value.img}
                    level={value.level}
                    handleRemoveFromFavorite={this.handleRemoveFromFavorite}
                    showUpdateForm={this.showUpdateForm}
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

export default Favorites
