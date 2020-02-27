import React, { Component } from 'react';
import {
  View,
  Text,
  Button
} from 'react-native';
import styles from '../../assets/styles';

export default class Details extends Component {
  constructor(props) {
    super(props);
    this.state =
    {
      film: {} 
    }
  }

  async componentDidMount() {
    this.getFilmId();
  }

  getFilmId() {
    const { params } = this.props.route;
    const filmId = params ? params.filmId : null;

    this.fetchListFilms(filmId);
  }

  async fetchListFilms(id) {
    const response = await fetch('https://ghibliapi.herokuapp.com/films/' + id, {
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const data = await response.json();
    console.log(data)
    //this.setState({ films: data.sort((a, b) => a.ndex - b.ndex) });
    this.setState({ film: data });
  }

  render() {
    return (
      <View style={styles.view}>
        <Text>{JSON.stringify(this.state.film)}</Text>
    </View>
    );
  }
}