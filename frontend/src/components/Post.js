import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Avatar } from "@mui/material";
import React from "react";
import "./Post.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import TelegramIcon from "@mui/icons-material/Telegram";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import imgAvatar from './assets/Shree.jpg'; // Import the avatar image

function Post({ user, postImage, likes, timestamp }) {
  return (
    <div className="post">
      <div className="post__header">
        <div className="post__headerAuthor">
          <Avatar
            style={{
              marginRight: "10px",
              // backgroundColor: "red", // Background color (material UI red)
              backgroundImage: `url(${imgAvatar})`, // Correct way to set a background image
              backgroundSize: "cover", // Ensure image covers the avatar area
            }}
          >
            {!imgAvatar && user.charAt(0).toUpperCase()} {/* Fallback to user's initial if no image */}
          </Avatar>{" "}
          {user} • <span> {timestamp}</span>
        </div>
        <MoreHorizIcon />
      </div>
      <div className="post__image">
        <img src={postImage} alt={`${user}'s post`} className="post__image" /> {/* Render image here */}
      </div>
      <div className="post__footer">
        <div className="post__footerIcons">
          <div className="post__iconsMain">
            <FavoriteBorderIcon className="postIcon-f" />
            <ChatBubbleOutlineIcon className="postIcon" />
            <TelegramIcon className="postIcon" />
          </div>
          <div className="post__iconSave">
            <BookmarkBorderIcon className="postIcon" />
          </div>
        </div>
        Liked by {likes} people.
      </div>
    </div>
  );
}

export default Post;
