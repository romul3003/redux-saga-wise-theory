import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

export default function Blog() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({ type: 'LOAD_BLOG_DATA' })
  }, [])

  return <h1>Blog</h1>
}
