import React from 'react'
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Platform, FlatList } from 'react-native'
import { white, purple, gray, black } from '../utils/colors'
import getDecksData from '../utils/data'
function Card ({title, questions}) {
    return(
        <View style={styles.container}>
            <Text style={{fontSize: 50, textAlign: 'center', color: black}}>{title}</Text>
            <Text style={{fontSize: 30, textAlign: 'center', color: gray}}>{questions.length}</Text>
        </View>
    )
}

class Decks extends React.Component {
    renderItem = ({item}) => {
        return <Card {...item} />
    }
    _keyExtractor = (item, index) => item.title

    render() {
        debugger
        const questions = getDecksData()
        questionsArray = Object.keys(questions).map(value => questions[value])

        return (
            <View style={styles.container}> 
                <FlatList 
                    data= {questionsArray}
                    renderItem= {this.renderItem}
                    keyExtractor={this._keyExtractor}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: white
    },
    row: {
      flexDirection: 'row',
      flex: 1,
      alignItems: 'center',
    }
})

export default Decks