import React from "react";

import StarGroup from "./StarGroup";

const Comment = ({ comment }) => {
  return (
    <div className="comment">
      <div className="text-medium">
        <StarGroup size={14} rate={comment.rate} />
        {comment.name}
      </div>
      <p>{comment.comment}</p>
    </div>
  );
};

export default Comment;
