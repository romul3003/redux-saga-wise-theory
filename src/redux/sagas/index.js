import { spawn, call, all } from 'redux-saga/effects'
import loadBasicData from './initialSagas'
import pageLoaderSaga from './pageLoaderSaga'

export default function* rootSaga() {
  const sagas = [loadBasicData, pageLoaderSaga]

  const retrySagas = sagas.map((saga) =>
    spawn(function* () {
      while (true) {
        try {
          yield call(saga)
          break
        } catch (e) {
          console.log(e)
        }
      }
    })
  )

  yield all(retrySagas)
}
