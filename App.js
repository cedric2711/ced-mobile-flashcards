import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AddCard from './components/AddCard'
import Deck from './components/Deck'
import Quiz from './components/Quiz'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Quiz/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
