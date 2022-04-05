import React, { useState } from "react";
import cn from "classnames";
const LikeButton = () => {
    const [liked, setLiked] = useState(null);
  
    return (
      <button
        onClick={() => setLiked(!liked)}
        onAnimationEnd={() => setClicked(false)}
        className={cn("like-button-wrapper", {
          liked,
        })
      >
  
    }
  export default LikeButton