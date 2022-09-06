import { useState } from "react";
import { AiOutlineVideoCameraAdd } from "react-icons/ai";
import { FaPhotoVideo } from "react-icons/fa";
import { MdOutlineAddReaction } from "react-icons/md";
import { useContext } from "../../Contexts/GContext";

const AddPost = () => {
  const { setPosts } = useContext();
  const [text, setText] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setPosts((p: any) => [
      ...p,
      {
        id: p.length + 1,
        user: {
          username: "username",
          name: "New User",
        },
        title: "Default title",
        description: text,
        likes: [1, 2, 3, 4, 5],
        comments: [],
      },
    ]);
    setText("");
  };

  return (
    <div className="p-4 dark:bg-zinc-800 mb-5 w-[95%] md:w-[80%] mx-auto shadow rounded-lg">
      <div className="flex items-center gap-x-2 border-b border-gray-500 pb-3">
        <div className=" w-10 h-10 bg-cyan-400 rounded-full"></div>
        <form onSubmit={handleSubmit} className="flex-1">
          <input
            type="text"
            name="comment"
            placeholder="What's in your mind, Kaushik"
            value={text}
            onChange={(e: any) => setText(e.target.value)}
            className="w-full px-5 py-2 text-lg rounded-full dark:bg-zinc-700"
          />
        </form>
      </div>

      <div className="flex justify-evenly my-1 py-2">
        {data2.map((v) => (
          <div
            key={v.id}
            className={`flex flex-wrap items-center gap-x-2 pb-2 cursor-pointer hover:scale-105 text-base font-semibold transition text-gray-400`}
          >
            {v.icon}
            <div>{v.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddPost;

const data2 = [
  {
    id: 1,
    icon: <AiOutlineVideoCameraAdd size={22} color="cyan" />,
    name: "Live video",
  },
  { id: 2, icon: <FaPhotoVideo size={22} color="cyan" />, name: "Photo/video" },
  {
    id: 3,
    icon: <MdOutlineAddReaction size={22} color="cyan" />,
    name: "Feeling/activity",
  },
];
