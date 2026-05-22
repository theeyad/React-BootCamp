import { useParams } from "react-router-dom";
import { postsContext } from "../../Contexts/PostsContext";
import { useContext } from "react";

export default function PostDetails() {
  const { postId } = useParams();
  let posts = useContext(postsContext);

  let post = posts.find((p) => {
    return parseInt(postId) === p.id;
  });
    
    console.log(post)

  return (
    <>
      <h1>Post Details</h1>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </>
  );
}
