import { RECEIVE_DECKS, ADD_DECK, ADD_QUESTION } from '../actions'

function entries (state = {}, action) {
  switch (action.type) {
    case RECEIVE_DECKS :
      return {
        ...state
      }
    case ADD_DECK :
      return {
        ...state
      }
    case ADD_QUESTION :
      return {
        ...state
      }
    default :
      return state
  }
}

export default entries