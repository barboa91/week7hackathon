import { GET_POST } from '../types'

export const GetPosts = () => {
  return async (dispatch) => {
    try {
      const posts = await GetPosts()

      dispatch({
        typp: GET_POST,
        payload: posts
      })
    } catch (error) {
      throw error
    }
  }
}
