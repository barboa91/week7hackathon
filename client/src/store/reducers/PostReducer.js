import { GET_POST } from '../types'

const initialState = {
  posts: []
}

const PostReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POST:
      return { ...state, posts: action.payload }
    default:
      return { ...state }
  }
}

export default PostReducer
