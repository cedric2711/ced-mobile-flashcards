import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { white, purple, gray, black } from '../utils/colors'
import { connect } from 'react-redux'

class Deck extends React.Component {
    addCard = () => {
        this.props.navigation.navigate(
            'AddCard',
            { deckId: this.props.navigation.state.params.deckId }
        )
    }

    startQuiz = () => {
        this.props.navigation.navigate(
            'Quiz',
            { deckId: this.props.navigation.state.params.deckId }
        )
    }
    render() {
        ;
        const deckId = this.props.navigation.state.params.deckId
        const { title, questions } = this.props.decks[deckId]
        return (
            <View>
                <Text style={{ fontSize: 50, textAlign: 'center', color: black }}>{title}</Text>
                <Text style={{ fontSize: 40, textAlign: 'center', color: gray }}>{questions.length} Cards</Text>
                <TouchableOpacity
                    style={styles.addCardBtn}
                    onPress={this.addCard}>
                    <Text style={styles.addCardText}>Add Card</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.startQuizBtn}
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
)(Deck)