import { useSelector, useDispatch } from 'react-redux'

export default function Blog() {
  const dispatch = useDispatch()
  const blogData = useSelector((store) => store.app.blog)
  // eslint-disable-next-line no-console
  console.log('blog data', blogData)

  return (
    <div>
      <h1>Blog</h1>
      <button
        onClick={() => {
          dispatch({
            type: 'LOAD_SOME_DATA',
          })
        }}
      >
        Load some data
      </button>
    </div>
  )
}
