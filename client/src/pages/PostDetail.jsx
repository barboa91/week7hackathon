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

  const onClickLike = async () => {
    const res = await Client.post(`/likePost/${id}`, {})

    props.fetchPosts()
  }

  return (
    <div>
      {props.postState.posts.map(
        (post) =>
          post._id === id && (
            <div>
              <img src={post.image} alt="poster" />
              <p>Description: {post.description}</p>
              <p>
                {props.postState.locations.locations.map(
                  (loc) =>
                    post.location.includes(loc._id) && (
                      <span key={loc._id}>
                        Location Name: {loc.name}
                        <br></br>
                        Location City: {loc.city}
                        <br></br>
                        Location Country: {loc.country}
                      </span>
                    )
                )}
              </p>
              <div>
                <h3>Comments:</h3>
                {props.postState.comments.comments.map(
                  (comm) =>
                    post.comments.includes(comm._id) && (
                      <p key={comm._id}>{comm.comment}</p>
                    )
                )}
              </div>
              <Comment onSubmit={onSubmit} />
              <span>{post.likes}</span>
              <LikeButton onClickLike={onClickLike} />
            </div>
          )
      )}
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail)
