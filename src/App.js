import { useDispatch, useSelector } from 'react-redux'

const App = () => {
  const store = useSelector((store) => store)
  const dispatch = useDispatch()

  return <div>Redux saga tutorial</div>
}

export default App
