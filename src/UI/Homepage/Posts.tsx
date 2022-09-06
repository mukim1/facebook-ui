import { Fragment, useState } from "react";
import { Post } from "../../components/Types/Post";
import { useContext } from "../../Contexts/GContext";
import { MdEmail } from "react-icons/md";
import {
  EmailShareButton,
  FacebookShareButton,
  TwitterShareButton,
} from "react-share";
import { FiFacebook, FiTwitter } from "react-icons/fi";
import { Modal } from "../../components/Modals/Modal";
import PostLayout from "../../components/Layouts/PostLayout";

const Posts = () => {
  const { posts, setPosts } = useContext();
  const [shareModal, setShareModal] = useState(false);

  return (
    <Fragment>
      {posts
        .sort((x, y) => y.id - x.id)
        .map((v: Post) => (
          <PostLayout
            key={v.id}
            post={v}
            setPosts={setPosts}
            setShareModal={setShareModal}
          >
            <div className="flex items-center gap-x-2 pb-2">
              <div className=" w-10 h-10 bg-cyan-600 rounded-full"></div>
              <div>
                <h3 className="font-semibold leading-none">{v.user.name}</h3>
                <small className="dark:text-gray-300">7 h Public</small>
              </div>
            </div>
            <p>{v.description}</p>
          </PostLayout>
        ))}

      <Modal open={shareModal} handleClose={() => setShareModal(false)}>
        <div className="p-3 flex justify-center gap-x-4">
          <EmailShareButton url="facebook.com">
            <MdEmail />
          </EmailShareButton>
          <FacebookShareButton url="facebook.com">
            <FiFacebook />
          </FacebookShareButton>
          <TwitterShareButton url="twitter.com">
            <FiTwitter />
          </TwitterShareButton>
        </div>
      </Modal>
    </Fragment>
  );
};

export default Posts;
