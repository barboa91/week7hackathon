import { GET_POST } from '../types'
import { GetPosts } from '../../services/PostService'

export const LoadPosts = () => {
  return async (dispatch) => {
    try {
      const posts = await GetPosts()

      dispatch({
        type: GET_POST,
        payload: posts
      })
    } catch (error) {
      throw error
    }
  }
}
