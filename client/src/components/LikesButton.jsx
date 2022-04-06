import React, { useState } from 'react'

const LikeButton = (props) => {
  const [liked, setLiked] = useState(null)

  return <button onClick={() => setLiked()}>Like</button>
}

export default LikeButton
