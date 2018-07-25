import React from 'react'
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Platform } from 'react-native'
import { white, purple, gray, black, green, red } from '../utils/colors'

const qu= [
    {
        question:"Question 1",
        answer: "Answer 1"
    },
    {
        question:"Question 2",
        answer: "Answer 2"
    },
    {
        question:"Question 3",
        answer: "Answer 3"
    }
]

class Quiz extends React.Component {
    state = {
        totalCorrect:0,
        questions:qu ,
        currentQuestion: 0,
        quizCompleted: false,
        showAnswer:false
    }
   
    backToDeck = () => {
        debugger

    }
    showAnswer = () => {
        this.setState({
            showAnswer:true
        })
    }
    correctAns = () => {
        debugger
        this.questionAnswered(true)
    }

    incorrectAns = () => {
        debugger
        this.questionAnswered(false)
    }
    questionAnswered =(isCorrect) =>{
        debugger
        const {totalCorrect, currentQuestion, questions} = this.state;
        this.setState({
            totalCorrect: (isCorrect)? totalCorrect+1: totalCorrect,
            currentQuestion: (currentQuestion <= (questions.length-1))? currentQuestion+1:currentQuestion,
            quizCompleted: (currentQuestion+1 == questions.length)? true : false,
            showAnswer: false
        })
    }
    render () {
        const {totalCorrect, questions, currentQuestion, quizCompleted, showAnswer} = this.state

        if(quizCompleted){
            return (
                <View>
                    <Text>{totalCorrect}</Text>
                    <TouchableOpacity
                        style = {styles.correctBtn}
                        onPress={this.backToDeck}>
                        <Text style={styles.correctText}>Back To Deck</Text>
                    </TouchableOpacity>
                </View>
            )
        }

        return (
            <View style = {styles.container}>
                <Text style={{fontSize: 12, textAlign: 'left', color: gray}}>{(currentQuestion+1)}/{questions.length} Cards</Text>
                {! showAnswer && <Text style={{fontSize: 50, textAlign: 'center', color: black}}>{questions[currentQuestion].question}</Text> }
                { showAnswer && <Text style={{fontSize: 50, textAlign: 'center', color: black}}>{questions[currentQuestion].answer}</Text> }
                <TouchableOpacity
                    style = {styles.answerBtn}
                    onPress={this.showAnswer}>
                    <Text style={styles.correctText}>Answer</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style = {styles.correctBtn}
                    onPress={this.correctAns}>
                    <Text style={styles.correctText}>Add Card</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style = {styles.incorrectBtn}
                    onPress={this.incorrectAns}>
                    <Text style={styles.incorrectText}>Start Quiz</Text>
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
    correctBtn: {
        backgroundColor: green,
        padding: 10,
        borderRadius: 7,
        height: 45,
        marginLeft: 40,
        marginRight: 40,
        borderColor: gray,
        borderWidth: 1,
    },
    incorrectBtn: {
        backgroundColor: red,
        padding: 10,
        borderRadius: 7,
        height: 45,
        marginLeft: 40,
        marginRight: 40,
    },
    correctText: {
      color: black,
      fontSize: 22,
      textAlign: 'center',
    },
    incorrectText: {
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

  export default Quiz