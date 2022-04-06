import { Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import {
  LoadComments,
  LoadLocations,
  LoadPosts
} from '../store/actions/PostAction'
import { connect } from 'react-redux'
import Comment from '../components/Comments'
import LikeButton from '../components/LikesButton'

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

const Post = (props) => {
  useEffect(() => {
    props.fetchPosts()
    props.fetchComments()
    props.fetchLocations()
  }, [])

  let navigate = useNavigate()
  const handleClick = (id) => {
    console.log('clicked')

    navigate(`/post/${id}`)
  }

  return (
    <div className="postContainer">
      {props.postState.posts.map((post) => (
        <div
          key={post._id}
          className="postContent"
          onClick={() => handleClick(post._id)}
        >
          <div className="imgCont">
            <img src={post.image} alt="" style={{ width: '200px' }} />
          </div>
          <div className="desCont">
            <p>{post.description}</p>
            <p>
              {props.postState.locations.locations.map(
                (loc) =>
                  post.location.includes(loc._id) && (
                    <span key={loc._id}>{loc.name}</span>
                  )
              )}
            </p>
            <p>
              {props.postState.comments.comments.map(
                (comm) =>
                  post.comments.includes(comm._id) && (
                    <span key={comm._id}>{comm.comment}</span>
                  )
              )}
            </p>
          </div>
          <div className="commCont">
            <p>click to leave a comment</p>
            <span>{post.likes}</span>
            <LikeButton />
          </div>
        </div>
      ))}
      <div></div>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)
