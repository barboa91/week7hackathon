import { useState } from "react"



const Comment = (props) => {

    const [comment, setComment] = useState('')


    const onClickComment=() =>{
        props.submitComment({comment})
    }    

return( 

<div className="reviewComment">
    <h1>Leave a Comment</h1>
    <input 
    type='text'
    name='comment'
    placeholder='Comment Here'
    onChange={(v)=> setComment()} />
    <button onClick={onClickComment}>Submit</button>

</div>
)
}
export default Comment;
