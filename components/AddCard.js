import React from 'react'
import { Text, StyleSheet, TextInput, KeyboardAvoidingView, TouchableOpacity, Platform } from 'react-native'
import { white, purple, gray } from '../utils/colors'
import {submitEntry, getEntry} from '../utils/api'


function SubmitBtn ({ onPress }) {
    return (
      <TouchableOpacity
        style={Platform.OS === 'ios' ? styles.iosSubmitBtn : styles.AndroidSubmitBtn}
        onPress={onPress}>
          <Text style={styles.submitBtnText}>SUBMIT</Text>
      </TouchableOpacity>
    )
}

class AddCard extends React.Component {
    state = {
        question:'',
        answer:''
    }

    handelQuestionChange = (input) =>{
        this.setState({
            question: input
        })
    }

    handelAnswerChange = (input) =>{
        this.setState({
            answer: input
        })
    }

    submit = () =>{
        const questionSet= this.state
        const questionKey = this.props.navigation.state.params.deckId
        getEntry(questionKey)
            .then((questionBlock) => {
                questionBlock.questions.push(questionSet)
                debugger
                submitEntry({entry:questionBlock, key:questionKey})
            })
        
        this.props.navigation.navigate(
            'Deck',
            { deckId: questionKey }
        )
    }
    render () {
        const {question, anwser} = this.state
        return (
            <KeyboardAvoidingView behavior='padding'>
                <Text>Question</Text>
                <TextInput
                    value={question}
                    style={styles.input}
                    onChangeText= {this.handelQuestionChange}
                />
                <Text>Answer</Text>
                <TextInput
                    value={anwser}
                    style={styles.input}
                    onChangeText= {this.handelAnswerChange}
                />
                <SubmitBtn onPress={this.submit} />
            </KeyboardAvoidingView>
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
    submitBtnText: {
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

  export default AddCard