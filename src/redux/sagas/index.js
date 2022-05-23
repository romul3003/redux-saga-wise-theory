import { fork, spawn, call, all, delay } from 'redux-saga/effects'

function* auth() {
  yield delay(2000)

  console.log('auth ok')

  return true
}

function* loadUsers() {
  const request = yield call(fetch, 'https://swapi.dev/api/people')
  const data = yield call([request, request.json])

  console.log('data', data)
}

export function* loadBasicData() {
  yield all([fork(auth), fork(loadUsers)])
}

export default function* rootSaga() {
  const sagas = [loadBasicData]

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
