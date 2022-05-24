import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const App = () => {
  const store = useSelector((store) => store)
  const dispatch = useDispatch()

  return (
    <div>
      <h1>Redux saga tutorial</h1>
      <div>
        <Link to="blog">Open blog</Link>
      </div>
    </div>
  )
}

export default App
