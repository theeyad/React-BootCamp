import "./Button.css";

export default function Button(props) {
  if (props.children.props.children[0].type !== "p") {
    return null;
  }
  return <div className="tag-button">{props.children}</div>;
}
