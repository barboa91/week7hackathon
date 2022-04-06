import { useState } from 'react'

const Comment = (props) => {
  const [comment, setComment] = useState('')

  const onClickComment = () => {
    props.submitComment({ comment })
  }

  return (
    <div className="reviewComment">
      <h6>Leave a Comment</h6>
      <input
        type="text"
        name="name"
        placeholder="Name"
        // onChange={() => setComment()}
      />
      <input
        type="text"
        name="comment"
        placeholder="Comment Here"
        // onChange={() => setComment()}
      />
      <button onClick={onClickComment}>Add</button>
    </div>
  )
}
export default Comment
