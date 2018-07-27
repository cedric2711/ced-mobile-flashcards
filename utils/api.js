import { AsyncStorage } from 'react-native'
import getDummyDecksData from './data'

export const DECKS_STORAGE_KEY = 'Cedric:DecksKey'

function isEmpty(obj) {
  if(JSON.stringify(obj)==='"{}"'){
    return true
  }
  return false
}

function getData (result) {
    debugger;
    if(result===null || isEmpty(result)){
      const dummyData=getDummyDecksData()
      for(key in dummyData){
        submitEntry({
          entry:dummyData[key],
          key: key
        })
      }
      return dummyData
    }
    return result
}
export function fetchDeckResults () {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then(getData)
}

export function submitEntry ({ entry, key }) {
  return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
    [key]: entry
  }))
}

export function removeEntry (key) {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then((results) => {
      const data = JSON.parse(results)
      data[key] = undefined
      delete data[key]
      AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(data))
    })
}

export function getEntry (key) {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then((results) => {
      const data = JSON.parse(results)
      if(data === null){
        const dummyData=getData(data)
        return (dummyData[key]===undefined)?null:dummyData[key]
      }
      return (data[key]===undefined)?null:data[key]
    })
}