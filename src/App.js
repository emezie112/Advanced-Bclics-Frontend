import { BrowserRouter, Route, main, Routes } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Auth from "./pages/Auth/Auth";
import Home from "./pages/home/Home";
import Profile from "./pages/Profile/Profile";
import Message from "./pages/Message/Message";
import Search from "./pages/Search/Search";
import Video from "./pages/Video/Video";
import MessageText from "./components/MessageText/MessageText";
import Status from "./components/Status/Status";
import StatusText from "./components/StatusText/StatusText";
import LikePage from "./pages/LikePage/LikePage";
import SharePage from "./pages/SharePage/SharePage";
import ViewPage from "./pages/ViewPage/ViewPage";
import NotificationPage from "./pages/NotificationPage/NotificationPage";
import FollowersPage from "./pages/FollowersPage/FollowersPage";
import AdvertisementPage from "./pages/AdvertisementPage/AdvertisementPage";
import SuggestedPage from "./pages/SuggestedPage/SuggestedPage";
import HashtagPage from "./pages/HashtagPage/HashtagPage";

function App() {
  const [imageNum, setImageNum] = useState(0);
  const [imgModal, setImgModal] = useState(false);
  return (
    <div className="App">
      <div className="blur" style={{ top: "-18%", right: "0" }}></div>
      <div className="blur" style={{ top: "36%", left: "-8rem" }}></div>

      <BrowserRouter>
        <main>
          <Routes>
            {/* This is the login or signup page, the first thing a user will see */}
            <Route path="/" element={<Auth />} exact />
            {/* { This will be the home Page} */}
            <Route
              path="video"
              element={
                <Video
                  imageNum={imageNum}
                  setImageNum={setImageNum}
                  imgModal={imgModal}
                  setImgModal={setImgModal}
                />
              }
            />
            {/* {This will be The Search page} */}
            <Route
              path="search"
              element={
                <Search
                  imageNum={imageNum}
                  setImageNum={setImageNum}
                  imgModal={imgModal}
                  setImgModal={setImgModal}
                />
              }
            />
            {/* {This will be the My page or followers page,
           this is where this people he is following posts will be} */}
            <Route
              path="myPage"
              element={
                <Home
                  imageNum={imageNum}
                  setImageNum={setImageNum}
                  imgModal={imgModal}
                  setImgModal={setImgModal}
                />
              }
            />
            {/* This is the message page, this is the page where all the messages
         of those his following will be will be */}
            <Route path="message" element={<Message />} />
            {/* This is the account page, this is the page where the users Profile
          will be. personal info */}
            <Route path="account" element={<Profile />} />
            {/* This is the chatting page */}
            <Route path="chat" element={<MessageText />} />
            {/* This is for status just like whatapp status */}
            <Route path="status" element={<Status />} />
            {/* this is the status image */}
            <Route path="statusimg" element={<StatusText />} />
            {/* this is the status image */}
            <Route path="like" element={<LikePage />} />
            {/* this is the status image */}
            <Route path="share" element={<SharePage />} />
            {/* this is the status image */}
            <Route path="view" element={<ViewPage />} />
            {/* this is the status image */}
            <Route path="notification" element={<NotificationPage />} />
            {/* this is the status image */}
            <Route path="followers" element={<FollowersPage />} />
            {/* this is the status image */}
            <Route path="advertisement" element={<AdvertisementPage />} />
            {/* this is the status image */}
            <Route path="suggested" element={<SuggestedPage />} />
            {/* this is the status image */}
            <Route path="hashtag" element={<HashtagPage />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
