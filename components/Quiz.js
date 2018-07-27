import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { white, gray, black, green, red } from '../utils/colors'
import { clearLocalNotification, setLocalNotification } from '../utils/helpers'
import { connect } from 'react-redux'

class Quiz extends React.Component {
    state = {
        totalCorrect: 0,
        questions: [],
        currentQuestion: 0,
        quizCompleted: false,
        showAnswer: false,
        showAnswerText: "Answer"
    }

    backToDeck = () => {
        this.props.navigation.navigate(
            'Deck',
            { deckId: this.props.navigation.state.params.deckId }
        )
        clearLocalNotification()
            .then(setLocalNotification)

    }

    restartQuiz = () => {
        this.setState({
            totalCorrect: 0,
            currentQuestion: 0,
            quizCompleted: false
        })

        clearLocalNotification()
            .then(setLocalNotification)
    }

    showAnswer = () => {
        const { showAnswer } = this.state
        this.setState({
            showAnswer: !showAnswer,
            showAnswerText: (!showAnswer) ? 'Question' : 'Answer'
        })
    }
    correctAns = () => {
        
        this.questionAnswered(true)
    }

    incorrectAns = () => {
        
        this.questionAnswered(false)
    }
    questionAnswered = (isCorrect) => {
        
        const { totalCorrect, currentQuestion } = this.state;
        const deckId = this.props.navigation.state.params.deckId
        const { questions } = this.props.decks[deckId]
        this.setState({
            totalCorrect: (isCorrect) ? totalCorrect + 1 : totalCorrect,
            currentQuestion: (currentQuestion <= (questions.length - 1)) ? currentQuestion + 1 : currentQuestion,
            quizCompleted: (currentQuestion + 1 == questions.length) ? true : false,
            showAnswer: false,
            showAnswerText: "Answer"
        })
    }
    render() {
        const { totalCorrect, currentQuestion, quizCompleted, showAnswer, showAnswerText } = this.state
        const deckId = this.props.navigation.state.params.deckId
        const { questions } = this.props.decks[deckId]

        if (quizCompleted) {
            return (
                <View>
                    <Text style={{ fontSize: 50, textAlign: 'center', color: black }}>You got {totalCorrect} correct</Text>
                    <TouchableOpacity
                        style={styles.restartBtn}
                        onPress={this.restartQuiz}>
                        <Text style={styles.correctText}>Restart Quiz</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.correctBtn}
                        onPress={this.backToDeck}>
                        <Text style={styles.correctText}>Back To Deck</Text>
                    </TouchableOpacity>
                </View>
            )
        }

        if (questions.length === 0) {
            return (
                <View>
                    <Text>
                        No Questions in the Deck!
                    </Text>
                </View>
            )
        }

        return (
            <View style={styles.container}>
                <Text style={{ fontSize: 12, textAlign: 'left', color: gray }}>{(currentQuestion + 1)}/{questions.length} Cards</Text>
                {!showAnswer && <Text style={{ fontSize: 50, textAlign: 'center', color: black }}>{questions[currentQuestion].question}</Text>}
                {showAnswer && <Text style={{ fontSize: 50, textAlign: 'center', color: black }}>{questions[currentQuestion].answer}</Text>}
                <TouchableOpacity
                    style={styles.answerBtn}
                    onPress={this.showAnswer}>
                    <Text style={styles.correctText}>{showAnswerText}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.correctBtn}
                    onPress={this.correctAns}>
                    <Text style={styles.correctText}>Correct</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.incorrectBtn}
                    onPress={this.incorrectAns}>
                    <Text style={styles.incorrectText}>Incorrect</Text>
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
    restartBtn: {
        backgroundColor: gray,
        padding: 10,
        borderRadius: 7,
        height: 45,
        marginLeft: 40,
        marginRight: 40,
        borderColor: black,
        borderWidth: 1,
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
        width: 200,
        height: 44,
        borderColor: gray,
        borderWidth: 1,
        margin: 50,
        padding: 0
    }
})

function mapStateToProps(decks) {
    
    return {
        decks
    }
}
export default connect(
    mapStateToProps,
)(Quiz)