import axios from 'axios'
import Client from '../services'
import { useState } from 'react'

const Comment = (props) => {
  const [comment, setComment] = useState({
    name: '',
    comment: '',
    like: 0
  })

  return (
    <div className="reviewComment">
      <h6>Leave a Comment</h6>
      <input
        type="text"
        name="name"
        placeholder="Name"
        onChange={(e) => setComment({ ...comment, name: e.target.value })}
      />
      <input
        type="text"
        name="comment"
        placeholder="Comment Here"
        onChange={(e) => setComment({ ...comment, comment: e.target.value })}
      />
      <button onClick={() => props.onSubmit(comment)}>Add</button>
    </div>
  )
}
export default Comment
