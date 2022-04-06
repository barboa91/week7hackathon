import Post from '../components/Post'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import {
  LoadComments,
  LoadLocations,
  LoadPosts
} from '../store/actions/PostAction'
import { connect } from 'react-redux'
import Comment from '../components/Comments'
import LikeButton from '../components/LikesButton'
import Client from '../services'

const mapStateToProps = ({ postState }) => {
  return {
    postState
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: () => dispatch(LoadPosts()),
    fetchComments: () => dispatch(LoadComments()),
    fetchLocations: () => dispatch(LoadLocations())
  }
}

const PostDetail = (props) => {
  console.log(props.postState)
  let { id } = useParams()

  useEffect(() => {
    props.fetchPosts()
    props.fetchComments()
    props.fetchLocations()
  }, [])

  const onSubmit = async (comm) => {
    const res = await Client.post(`/postComment/${id}`, comm)

    props.fetchPosts()
    props.fetchComments()
    props.fetchLocations()
  }

  return (
    <div>
      {props.postState.posts.map(
        (post) =>
          post._id === id && (
            <div>
              <img src={post.image} alt="poster" />
              <p>{post.description}</p>
              <p>
                {props.postState.locations.locations.map(
                  (loc) =>
                    post.location.includes(loc._id) && (
                      <span key={loc._id}>
                        {loc.name}
                        <br></br>
                        {loc.city}
                        <br></br>
                        {loc.country}
                      </span>
                    )
                )}
              </p>
              <div>
                {props.postState.comments.comments.map(
                  (comm) =>
                    post.comments.includes(comm._id) && (
                      <p key={comm._id}>{comm.comment}</p>
                    )
                )}
              </div>
              <Comment onSubmit={onSubmit} />
              <span>{post.likes}</span>
              <LikeButton />
            </div>
          )
      )}
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail)
