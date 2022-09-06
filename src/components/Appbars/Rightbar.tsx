import { useEffect, useState } from "react";
import { ActiveAvatar } from "../Avatars/Avatar";
import { AiOutlineVideoCameraAdd, AiOutlineSearch } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";

const Rightbar = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    try {
      fetch("https://dummyjson.com/users")
        .then((res) => res.json())
        .then((json) => setUsers(json.users));
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <div className="fixed w-[50%] xl:w-[24%]">
      <div className=" h-screen overflow-y-auto p-3">
        <div className="flex justify-between items-center border-y border-gray-500 py-2 mb-3">
          <h5 className="font-semibold">Contacts</h5>
          <div className="flex text-2xl gap-x-4 cursor-pointer">
            <AiOutlineVideoCameraAdd />
            <AiOutlineSearch />
            <BsThreeDots />
          </div>
        </div>
        {users?.map((v: any, i) => (
          <div key={v.id} className="flex items-center gap-x-2 pb-2">
            <ActiveAvatar />
            <p className="font-semibold text-sm tracking-wider">
              {v.firstName} {v.lastName}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rightbar;
