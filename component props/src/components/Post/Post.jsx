import "./Post.css";

export default function Post(props) {
  return (
    <div className="post">
      {props.children}
      <p className="post-title">{props.title}</p>
      <hr className="sep" />
      <span className="post-body">{props.body}</span>
    </div>
  );
}
