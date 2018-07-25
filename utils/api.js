import { AsyncStorage } from 'react-native'
import { formatCalendarResults, CALENDAR_STORAGE_KEY } from './_calendar'

export const DECKS_STORAGE_KEY = 'Cedric:DecksKey'

export function fetchCalendarResults () {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then(formatCalendarResults)
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