import { FaRegCommentAlt, FaRegThumbsUp } from "react-icons/fa";
import { RiShareForwardLine } from "react-icons/ri";
import { Avatar } from "../Avatars/Avatar";
import { useRef, useState } from "react";
import { Post } from "../Types/Post";

const PostLayout = ({ children, post, setPosts, setShareModal }: Props) => {
  const commentBoxRef = useRef(null as any);
  const [comment, setComment] = useState("");

  const handleClick = (v: any) => {
    switch (v) {
      case "Like":
        setPosts((p: Post[]) =>
          p.map((v: Post) =>
            v.id === post.id
              ? {
                  ...v,
                  likes: v.likes.length > 5 ? [1, 2, 3, 4, 5] : [...v.likes, 6],
                }
              : v
          )
        );
        break;
      case "Comment":
        commentBoxRef.current?.focus();
        break;
      case "Share":
        setShareModal(true);
        break;

      default:
        break;
    }
  };

  const handleCommentSubmit = (e: any) => {
    e.preventDefault();
    setPosts((p: Post[]) =>
      p.map((v: Post) =>
        v.id === post.id ? { ...v, comments: [...v.comments, comment] } : v
      )
    );
    setComment("");
  };

  return (
    <div className="p-4 dark:bg-zinc-800 mb-5 w-[95%] md:w-[80%] mx-auto shadow rounded-lg">
      {children}

      <div className="flex justify-between my-2">
        <p className="font-semibold">
          {post.likes.length > 5
            ? `You, Jorina and ${post.likes.length} others`
            : `Jorina, Karina and ${post.likes.length} others`}
        </p>
        <p className="font-semibold">15 comments</p>
      </div>

      <div className="border-y dark:border-gray-600 flex justify-evenly my-1 py-2">
        {data.map((v) => (
          <div
            key={v.id}
            className={`flex items-center gap-x-2 pb-2 cursor-pointer hover:scale-105 text-base font-semibold transition ${
              v.name === "Like" && post.likes.length > 5
                ? "text-blue-400"
                : "text-gray-400"
            }`}
            onClick={() => handleClick(v.name)}
          >
            {v.icon}
            <div>{v.name}</div>
          </div>
        ))}
      </div>

      {post.comments.length > 0 && (
        <div className="px-3 pt-3">
          {post.comments.map((v, i) => (
            <div key={i} className="flex items-center gap-x-2 py-2">
              <div className=" w-8 h-8 bg-gray-700 rounded-full"></div>
              <small className="bg-gray-700 rounded-full px-5 py-1 tracking-wider">
                <p className="leading-none font-semibold pb-1">
                  Comment {i + 1} :
                </p>
                <p className="leading-none">{v}</p>
              </small>
            </div>
          ))}
        </div>
      )}

      <div className="flex items-center gap-x-2 mt-5">
        <Avatar />
        <form onSubmit={handleCommentSubmit} className="flex-1">
          <input
            type="text"
            name="comment"
            placeholder="Write a comment..."
            value={comment}
            onChange={(e: any) => setComment(e.target.value)}
            className="w-full px-5 py-2 text-lg rounded-full dark:bg-zinc-700"
            ref={commentBoxRef}
          />
        </form>
      </div>
    </div>
  );
};

export default PostLayout;

const data = [
  { id: 1, icon: <FaRegThumbsUp size={20} />, name: "Like" },
  { id: 2, icon: <FaRegCommentAlt size={18} />, name: "Comment" },
  { id: 3, icon: <RiShareForwardLine size={25} />, name: "Share" },
];

interface Props {
  children: any;
  post: Post;
  setPosts: any;
  setShareModal: any;
}
