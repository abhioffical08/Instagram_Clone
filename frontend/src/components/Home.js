import React, { useState } from 'react';
import './Home.css'; // Ensure this path is correct
import Post from "./Post";
// import { Avatar } from "@mui/material";

import Suggestions from "./Suggestions";
import "./Timeline.css";
import imgShre from './assets/Shree.jpg'; // import the image correctly

import img1 from './assets/1.jpg'; // import the image correctly
import img2 from './assets/2.jpg'; // import the image correctly
import img3 from './assets/3.jpg'; // import the image correctly
import img4 from './assets/4.jpg'; // import the image correctly
import img5 from './assets/5.jpg'; // import the image correctly
import img6 from './assets/6.jpg'; // import the image correctly
import img7 from './assets/7.jpg'; // import the image correctly
import img8 from './assets/8.jpg'; // import the image correctly
import img9 from './assets/9.jpg'; // import the image correctly


function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleDarkModeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  const [posts, setPosts] = useState([
    {
      user: "ISCKON_NVVC",
      postImage: imgShre, // path to local image
      likes: 1152,
      timestamp: "2d",
    },

    {
      user: "ISCKON_NVVC",
      postImage: img1, // path to local image
      likes: 1152,
      timestamp: "2d",
    },
    {
      user: "ISCKON_NVVC",
      postImage: img2, // path to local image
      likes: 432,
      timestamp: "2d",
    },
    {
      user: "ISCKON_NVVC",
      postImage: img3, // path to local image
      likes: 140,
      timestamp: "2d",
    },
    {
      user: "ISCKON_NVVC",
      postImage: img4, // path to local image
      likes: 14,
      timestamp: "2d",
    },
    {
      user: "ISCKON_NVVC",
      postImage: img5, // path to local image
      likes: 14,
      timestamp: "2d",
    },
    {
      user: "ISCKON_NVVC",
      postImage: img6, // path to local image
      likes: 14,
      timestamp: "2d",
    },
    {
      user: "ISCKON_NVVC",
      postImage: img7, // path to local image
      likes: 14,
      timestamp: "2d",
    },
    {
      user: "ISCKON_NVVC",
      postImage: img8, // path to local image
      likes: 14,
      timestamp: "2d",
    },
    {
      user: "ISCKON_NVVC",
      postImage: img9, // path to local image
      likes: 14,
      timestamp: "2d",
    },
  ]);

  return (
    <div className={`container ${isDarkMode ? 'dark-mode' : ''}`}>
      <nav>
        <div className="navbar">
          <div className="instagram-text-logo">
            <img
              src="https://i.postimg.cc/qMFTcDw1/instagram-text.png"
              width="50"
              height="60"
              alt="Instagram logo"
              className={isDarkMode ? 'bright-mode' : ''}
            />
          </div>
          <div className="sub-section" onClick={handleDarkModeToggle}>
            <i className="fa-solid fa-house"></i>
            <a href="#">Dark-mode</a>
          </div>
          <div className="sub-section">
            <i className="fa-solid fa-magnifying-glass"></i>
            <a href="#">Search</a>
          </div>
          <div className="sub-section">
            <i className="fa-regular fa-compass"></i>
            <a href="#">Explore</a>
          </div>
          <div className="sub-section">
            <i className="fa-solid fa-clapperboard"></i>
            <a href="#">Reels</a>
          </div>
          <div className="sub-section">
            <i className="fa-regular fa-message"></i>
            <a href="#">Messages</a>
          </div>
          <div className="sub-section" id="hidden2">
            <i className="fa-regular fa-heart"></i>
            <a href="#">Notification</a>
          </div>
          <div className="sub-section" id="hidden1">
            <i className="fa-solid fa-square-plus"></i>
            <a href="#">Create</a>
          </div>
          <div className="sub-section">
            <div className="profile-img">
              <img
                src="https://i.postimg.cc/zB3mRnhs/apy-logo.png"
                width="70"
                height="60"
                alt="Profile"
              />
            </div>
            <a href="#">Profile</a>
          </div>
          <div className="menu-section" id="hidden">
            <i className="fa-solid fa-bars"></i>
            <a href="#">More</a>
          </div>
        </div>
      </nav>

      <div class="middle-section">
      <div class="post-section">

      <div class="story-section">
            <div class="story">
              <div class="story-image">
                <img
                  data-lazyloaded="1"
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MDAiIGhlaWdodD0iOTAwIiB2aWV3Qm94PSIwIDAgNjAwIDkwMCI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgc3R5bGU9ImZpbGw6I2NmZDRkYjtmaWxsLW9wYWNpdHk6IDAuMTsiLz48L3N2Zz4="
                  width="600"
                  height="900"
                  decoding="async"
                  data-src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMGltYWdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"
                  alt=""
                />
              </div>
              <span>Aaradhya_gu.</span>
            </div>
            <div class="story">
              <div class="story-image">
                <img
                  data-lazyloaded="1"
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MDAiIGhlaWdodD0iOTAwIiB2aWV3Qm94PSIwIDAgNjAwIDkwMCI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgc3R5bGU9ImZpbGw6I2NmZDRkYjtmaWxsLW9wYWNpdHk6IDAuMTsiLz48L3N2Zz4="
                  width="600"
                  height="900"
                  decoding="async"
                  data-src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZSUyMGltYWdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"
                  alt=""
                />
              </div>
              <span>Adah_paret..</span>
            </div>
            <div class="story" id="story-2">
              <div class="story-image">
                <img
                  data-lazyloaded="1"
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MDAiIGhlaWdodD0iOTAwIiB2aWV3Qm94PSIwIDAgNjAwIDkwMCI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgc3R5bGU9ImZpbGw6I2NmZDRkYjtmaWxsLW9wYWNpdHk6IDAuMTsiLz48L3N2Zz4="
                  width="600"
                  height="900"
                  decoding="async"
                  data-src="https://images.unsplash.com/photo-1517702145080-e4a4d91435bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2ZpbGUlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
                  alt=""
                />
              </div>
              <span>Adhira_boi..</span>
            </div>
            <div class="story" id="story-3">
              <div class="story-image">
                <img
                  data-lazyloaded="1"
                  src="data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs="
                  decoding="async"
                  data-src="https://media.istockphoto.com/id/1418475387/photo/robotic-hand-pressing-a-keyboard-on-a-laptop-3d-rendering.webp?b=1&s=612x612&w=0&k=20&c=bqtiTjtbsN85HMdO40gidWq6uE4BW1-RGlUOkSfEgoI="
                  alt=""
                />
              </div>
              <span>Anika@189</span>
            </div>
            <div class="story" id="story-4">
              <div class="story-image">
                <img
                  data-lazyloaded="1"
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MDAiIGhlaWdodD0iOTAwIiB2aWV3Qm94PSIwIDAgNjAwIDkwMCI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgc3R5bGU9ImZpbGw6I2NmZDRkYjtmaWxsLW9wYWNpdHk6IDAuMTsiLz48L3N2Zz4="
                  width="600"
                  height="900"
                  decoding="async"
                  data-src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmlsZSUyMGltYWdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"
                  alt=""
                />
              </div>
              <span>Kashvi_tut</span>
            </div>
            <div class="story" id="story-5">
              <div class="story-image">
                <img
                  data-lazyloaded="1"
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MDAiIGhlaWdodD0iMzk5IiB2aWV3Qm94PSIwIDAgNjAwIDM5OSI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgc3R5bGU9ImZpbGw6I2NmZDRkYjtmaWxsLW9wYWNpdHk6IDAuMTsiLz48L3N2Zz4="
                  width="600"
                  height="399"
                  decoding="async"
                  data-src="https://images.unsplash.com/photo-1558203728-00f45181dd84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZmlsZSUyMGltYWdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"
                  alt=""
                />
              </div>
              <span>Rebecca.io</span>
            </div>
            <div class="story" id="story-6">
              <div class="story-image">
                <img
                  data-lazyloaded="1"
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MDAiIGhlaWdodD0iNDAwIiB2aWV3Qm94PSIwIDAgNjAwIDQwMCI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgc3R5bGU9ImZpbGw6I2NmZDRkYjtmaWxsLW9wYWNpdHk6IDAuMTsiLz48L3N2Zz4="
                  width="600"
                  height="400"
                  decoding="async"
                  data-src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"
                  alt=""
                />
              </div>
              <span>Sahana_pie.</span>
            </div>
            <div class="story" id="story-7">
              <div class="story-image">
                <img
                  data-lazyloaded="1"
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MDAiIGhlaWdodD0iOTAyIiB2aWV3Qm94PSIwIDAgNjAwIDkwMiI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgc3R5bGU9ImZpbGw6I2NmZDRkYjtmaWxsLW9wYWNpdHk6IDAuMTsiLz48L3N2Zz4="
                  width="600"
                  height="902"
                  decoding="async"
                  data-src="https://plus.unsplash.com/premium_photo-1664453546896-ad5e0f895eab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"
                  alt=""
                />
              </div>
              <span>Zara_comp</span>
            </div>
      </div>

      <div className="timeline">
      <div className="timeline__left">        
        <div className="timeline__posts">

          {posts.map((post, index) => (

            <Post
              key={index}
              user={post.user}
              postImage={post.postImage}
              likes={post.likes}
              timestamp={post.timestamp}
            />
          ))}
        </div>
      </div>
    </div>

      </div>
      </div>
      
      <Suggestions />


          
    </div>
  );
}

export default Home;
