import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Posts from "./components/Posts/Posts";
import PostDetails from "./components/PostDetails/PostDetails";
import { postsContext } from "./Contexts/PostsContext";
import NotFound from "./components/NotFound/NotFound";

function App() {
  const posts = [
    {
      id: 1,
      title: "Hello",
      body: "Hello there",
    },
    {
      id: 2,
      title: "Hi",
      body: "Hi there",
    },
    {
      id: 3,
      title: "Hola",
      body: "Hola there",
    },
  ];

  return (
    <>
      <postsContext.Provider value={posts}>
        <ul style={{ listStyle: "none", display: "flex" }}>
          <Link to={"/home"}>
            <li>
              <button style={{ cursor: "pointer" }}>Home</button>
            </li>
          </Link>
          <Link to={"/hello"}>
            <li>
              <button style={{ cursor: "pointer" }}>Hello</button>
            </li>
          </Link>
          <Link to={"/posts"}>
            <li>
              <button style={{ cursor: "pointer" }}>Posts</button>
            </li>
          </Link>
        </ul>

        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/home" element={<h1>Home</h1>} />
          <Route path="/hello" element={<h1>Hello</h1>} />
          <Route path="/posts">
            <Route index element={<Posts />} />
            <Route path=":postId" element={<PostDetails />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </postsContext.Provider>
    </>
  );
}

export default App;
