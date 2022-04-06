import { GET_COMMENTS, GET_LOCATIONS, GET_POST } from '../types'
import { GetPosts, GetComments, GetLocations } from '../../services/PostService'

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

export const LoadComments = () => {
  return async (dispatch) => {
    try {
      const comments = await GetComments()

      dispatch({
        type: GET_COMMENTS,
        payload: comments
      })
    } catch (error) {
      throw error
    }
  }
}

export const LoadLocations = () => {
  return async (dispatch) => {
    try {
      const locations = await GetLocations()

      dispatch({
        type: GET_LOCATIONS,
        payload: locations
      })
    } catch (error) {
      throw error
    }
  }
}
