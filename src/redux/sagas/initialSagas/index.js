import { fork, call, all, delay } from 'redux-saga/effects'

function* auth() {
  yield delay(2000)

  // eslint-disable-next-line no-console
  console.log('auth ok')

  return true
}

function* loadUsers() {
  const request = yield call(fetch, 'https://swapi.dev/api/people')
  const data = yield call([request, request.json])

  // eslint-disable-next-line no-console
  console.log('data', data)
}

export default function* loadBasicData() {
  yield all([fork(auth), fork(loadUsers)])
}
