import { GET_COMMENTS, GET_LOCATIONS, GET_POST } from '../types'

const initialState = {
  posts: [],
  comments: [],
  locations: []
}

const PostReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POST:
      return { ...state, posts: action.payload }
    case GET_COMMENTS:
      return { ...state, comments: action.payload }
    case GET_LOCATIONS:
      return { ...state, locations: action.payload }
    default:
      return { ...state }
  }
}

export default PostReducer
