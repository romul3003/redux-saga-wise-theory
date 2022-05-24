import { spawn, call, all, take, actionChannel } from 'redux-saga/effects'
import loadBasicData from './initialSagas'
import pageLoaderSaga from './pageLoaderSaga'

export function* fetchPlanets() {
  // eslint-disable-next-line no-console
  console.log('LOAD_SOME_DATA starts')

  const response = yield call(fetch, 'https://swapi.dev/api/planets')
  const data = yield call([response, response.json])

  // eslint-disable-next-line no-console
  console.log('LOAD_SOME_DATA completed', data)
}

export function* loadOnAction() {
  const channel = yield actionChannel('LOAD_SOME_DATA')

  while (true) {
    yield take(channel)

    yield call(fetchPlanets)
  }
}

export default function* rootSaga() {
  const sagas = [loadBasicData, pageLoaderSaga, loadOnAction]

  const retrySagas = sagas.map((saga) =>
    spawn(function* () {
      while (true) {
        try {
          yield call(saga)
          break
        } catch (e) {
          // eslint-disable-next-line no-console
          console.log(e)
        }
      }
    })
  )

  yield all(retrySagas)
}
