import {createStackNavigator} from 'react-navigation';
import Deck from './Deck'
import AddCard from './AddCard'
import Quiz from './Quiz'
import { white, purple} from '../utils/colors'
import Tabs from './Tab'

const MainNavigator = createStackNavigator({
    Home: {
      screen: Tabs,
    },
    Deck: {
      screen: Deck,
      navigationOptions: {
        headerTintColor: white,
        headerStyle: {
          backgroundColor: purple,
        }
      }
    },
    AddCard: {
      screen: AddCard,
      navigationOptions: {
        headerTintColor: white,
        headerStyle: {
          backgroundColor: purple,
        }
      }
    },
    Quiz: {
      screen: Quiz,
      navigationOptions: {
        headerTintColor: white,
        headerStyle: {
          backgroundColor: purple,
        }
      }
    }
  })

  export default MainNavigator