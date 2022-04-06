import { Link } from 'react-router-dom'
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

  const testFunction = () => {
    console.log('x')
  }

  console.log(props.postState.posts)
  console.log(props.postState.locations.locations)
  return (
    <div className="postContainer">
      {props.postState.posts.map((post) => (
        <div key={post._id} className="postContent">
          <div>
            <img src={post.image} alt="" style={{ width: '200px' }} />
          </div>
          <div>
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
          <div>
            <Comment />
            <p>{post.likes}</p>
            <LikeButton />
          </div>
        </div>
      ))}
      <div></div>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)
