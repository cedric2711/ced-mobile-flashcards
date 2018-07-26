import React from 'react'
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Platform, FlatList } from 'react-native'
import { white, purple, gray, black } from '../utils/colors'
import getDummyDecksData from '../utils/data'
import { AppLoading} from 'expo'
import {fetchDeckResults} from '../utils/api'
function Card ({title, questions}) {
    return(
        <View style={styles.container}>
            <Text style={{fontSize: 50, textAlign: 'center', color: black}}>{title}</Text>
            <Text style={{fontSize: 30, textAlign: 'center', color: gray}}>{questions.length}</Text>
        </View>
    )
}

class Decks extends React.Component {
    state = {
        ready: false,
        questions: {}
    }
    componentDidMount () {
       // const { dispatch } = this.props
        fetchDeckResults()
            .then((entries) => {
                if(entries){
                    this.setState({
                        ready: true,
                        questions: entries
                    })
                }
            })
    }
    renderItem = ({item}) => {
        return <Card {...item} />
    }
    _keyExtractor = (item, index) => item.title

    render() {
        debugger
        // const questions = getDummyDecksData()
        const {questions, ready} = this.state
        if (ready === false) {
            return <AppLoading />
        }

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