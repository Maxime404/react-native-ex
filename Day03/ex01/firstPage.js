import React, { Component } from 'react';
import {
  View,
  Button,
  ScrollView
} from 'react-native';
import styles from '../../assets/styles';

export default class FirstPage extends Component {

  constructor(props) {
    super(props);
    this.state = { films: [] }
  }

  componentDidMount() {
    this.fetchListFilms();
  }

  async fetchListFilms() {
    const response = await fetch('https://ghibliapi.herokuapp.com/films/', {
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const data = await response.json();
    console.log(data)
    //this.setState({ films: data.sort((a, b) => a.ndex - b.ndex) });
    this.setState({ films: data });
  }

  post = (id) => {
    this.props.navigation.navigate('Details', { filmId: id });
  }

  render() {
    return (
      <ScrollView style={styles.scrollView}>
        <View style={styles.viewList}>
          {this.state.films.map((film) =>
            <View style={styles.viewListBordered}>
              <Button
                title={film.title}
                onPress={(id) => this.post(film.id)}
              />
            </View>
          )}
        </View>
      </ScrollView>
    );
  }
}