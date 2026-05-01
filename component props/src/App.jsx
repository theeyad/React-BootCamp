import "./App.css";
import Header from "./components/Header/Header";
import Post from "./components/Post/Post";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <div className="posts">
          <Post title={"أكاديمية ترميز"} body={"أكاديمية لتعليم البرمجة"}>
            <h2
              style={{
                textAlign: "center",
                fontSize: "1.5rem",
                fontWeight: "bold",
              }}
            >
              20
            </h2>
          </Post>
          <Post title={"Hello world"} body={"the hello world post"} />
          <Post title={"Post 3"} body={"body of post 3"} />
        </div>
        <Sidebar />
      </div>
    </>
  );
}

export default App;
