import { useContext } from "react";
import { AiTwotoneDelete, AiOutlineSend } from "react-icons/ai";
import { BiSolidLike } from "react-icons/bi";
import { PostList } from "../store/post-list-store";
const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);
  return (
    <div className="card post-card" style={{ width: "35rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => deletePost(post.id)}
          >
            <AiTwotoneDelete />
            <span className="visually-hidden">unread messages</span>
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span key={tag} className="badge text-bg-primary tags">
            {tag}{" "}
          </span>
        ))}
        <div className="like-cmnt">
          <div>
            <button type="button" className="btn btn-primary like">
              <BiSolidLike />{" "}
              <span className="badge text-bg-secondary">{post.reactions} </span>
            </button>
          </div>
          <div className="cmnt">
            <input
              type="text"
              className="form-control shadow-none"
              placeholder="Write a comment..."
              aria-label="Recipient’s username"
              aria-describedby="button-addon2"
            />
            <button
              className="btn btn-outline-secondary"
              type="button"
              id="button-addon2"
            >
              <AiOutlineSend />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Post;
