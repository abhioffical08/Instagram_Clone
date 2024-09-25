import React, { useState } from "react";
import Post from "./Post";
import { Avatar } from "@mui/material";

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

function Timeline() {
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
    <>
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
      <div className="timeline__right">
        <Suggestions />
      </div>
    </div>
    </>
  );
}

export default Timeline;
