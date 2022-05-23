import { useDispatch, useSelector } from 'react-redux'

const App = () => {
  const store = useSelector((store) => store)
  const dispatch = useDispatch()

  return (
    <div>
      <button onClick={() => dispatch({ type: 'LOAD_DATA' })}>click me</button>
      Redux saga tutorial
    </div>
  )
}

export default App
