import LikeButton from './LikesButton'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { LoadPosts } from '../store/actions/PostAction'
import { connect } from 'react-redux'

const mapStateToProps = ({ postState }) => {
  return {
    postState
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: () => dispatch(LoadPosts())
  }
}

const Post = (props) => {
  useEffect(() => {
    props.fetchPosts()
  }, [])

  const testFunction = () => {
    console.log('x')
  }

  console.log(props)
  return (
    <div style={{ display: 'flex', alignContent: 'space-between' }}>
      {props.postState.posts.map((post) => (
        <div stype={{ width: '400px', height: '400px' }} key={post._id}>
          <img src={post.image} alt="" style={{ width: '200px' }} />
          <p>{post.description}</p>
          <p>location</p>
          <p>comments</p>
          <p>likes</p>
        </div>
      ))}
      <div></div>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)
