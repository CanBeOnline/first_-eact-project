import { useState } from "react";

export default function LikeButton() {
  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  return (
    <div className="space-x-3">
      <button
        onClick={handleClick}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Likes: {likes}
      </button>
    </div>
  );
}