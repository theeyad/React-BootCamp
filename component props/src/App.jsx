import "./App.css";
import Header from "./components/Header/Header";
import Post from "./components/Post/Post";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  let showCategory = true;

  const posts = [
    {
      id: 1,
      title: "أكاديمية ترميز",
      body: "أكاديمية لتعليم البرمجة",
      children: (
        <h2
          style={{
            textAlign: "center",
            fontSize: "1.5rem",
            fontWeight: "bold",
          }}
        >
          20
        </h2>
      ),
    },
    { id: 2, title: "Hello world", body: "the hello world post" },
    { id: 3, title: "Post 3", body: "body of post 3" },
  ];

  let homePost = posts.map((post) => {
    return (
      <Post key={post.id} title={post.title} body={post.body}>
        {post.children}
      </Post>
    );
  });

  return (
    <>
      <Header />
      <div className="container">
        <div className="posts">{homePost}</div>
        {showCategory ? <Sidebar /> : null}
      </div>
    </>
  );
}

export default App;
