import { Link } from "react-router-dom";
import { postsContext } from "../../Contexts/PostsContext";
import { useContext } from "react";

export default function Posts() {
  let posts = useContext(postsContext);

  let postsList = posts.map((post) => {
    return (
      <Link key={post.id} to={`/posts/${post.id}`}>
        <div
          style={{
            cursor: "pointer",
            textAlign: "center",
            backgroundColor: "orange",
            color: "black",
            borderRadius: "5px",
            padding: "5px",
            marginTop: "20px",
          }}
        >
          <h1>{post.title}</h1>
        </div>
      </Link>
    );
  });

  return <>{postsList}</>;
}
