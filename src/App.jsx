import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Headerr from "./components/Headerr";
import Footerr from "./components/Footerr";
import Sidebar from "./components/Sidebar";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";
import { useState } from "react";
import PostListProvider from "./store/post-list-store";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <PostListProvider>
      <div className="app-container">
        <Sidebar
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        ></Sidebar>
        <div className="content">
          <Headerr></Headerr>
          {selectedTab === "Home" ? (
            <PostList></PostList>
          ) : (
            <CreatePost></CreatePost>
          )}
          <Footerr></Footerr>
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
