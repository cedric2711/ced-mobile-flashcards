import React from 'react'
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Platform } from 'react-native'
import { white, purple, gray, black } from '../utils/colors'


function SubmitBtn ({ onPress }) {
    return (
      <TouchableOpacity
        style={Platform.OS === 'ios' ? styles.iosSubmitBtn : styles.AndroidSubmitBtn}
        onPress={onPress}>
          <Text style={styles.submitBtnText}>SUBMIT</Text>
      </TouchableOpacity>
    )
}

class Deck extends React.Component {
    state = {
        title:'Deck 1',
        question:[],
    }
    addCard = () => {
        debugger;
    }

    startQuiz = () => {
        debugger;
    }
    render () {
        const {title, question} = this.state
        return (
            <View>
                <Text style={{fontSize: 50, textAlign: 'center', color: black}}>{title}</Text>
                <Text style={{fontSize: 40, textAlign: 'center', color: gray}}>{question.length} Cards</Text>
                <TouchableOpacity
                    style = {styles.addCardBtn}
                    onPress={this.addCard}>
                    <Text style={styles.addCardText}>Add Card</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style = {styles.startQuizBtn}
                    onPress={this.startQuiz}>
                    <Text style={styles.startQuizText}>Start Quiz</Text>
                </TouchableOpacity>
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
    },
    addCardBtn: {
        backgroundColor: white,
        padding: 10,
        borderRadius: 7,
        height: 45,
        marginLeft: 40,
        marginRight: 40,
        borderColor: gray,
        borderWidth: 1,
    },
    startQuizBtn: {
        backgroundColor: black,
        padding: 10,
        borderRadius: 7,
        height: 45,
        marginLeft: 40,
        marginRight: 40,
    },
    iosSubmitBtn: {
      backgroundColor: purple,
      padding: 10,
      borderRadius: 7,
      height: 45,
      marginLeft: 40,
      marginRight: 40,
    },
    AndroidSubmitBtn: {
      backgroundColor: purple,
      padding: 10,
      paddingLeft: 30,
      paddingRight: 30,
      height: 45,
      borderRadius: 2,
      alignSelf: 'flex-end',
      justifyContent: 'center',
      alignItems: 'center',
    },
    addCardText: {
      color: black,
      fontSize: 22,
      textAlign: 'center',
    },
    startQuizText: {
        color: white,
        fontSize: 22,
        textAlign: 'center',
      },
    center: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 30,
      marginRight: 30,
    },
    input: {
        width:200,
        height:44,
        borderColor: gray,
        borderWidth: 1,
        margin: 50,
        padding: 0
    }
  })

  export default Deck