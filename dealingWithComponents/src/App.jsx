import "./App.css";
import Header from "./components/Header/Header";
import Post from "./components/post/post";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <div className="posts">
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
        <Sidebar />
      </div>
    </>
  );
}

export default App;
