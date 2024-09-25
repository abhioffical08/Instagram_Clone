import { Avatar } from "@mui/material";
import React from "react";
import imgAvatar from "./assets/Shree.jpg"; // Import the avatar image
import "./Suggestions.css";

function Suggestions() {
  return (
    <div className="suggestions">
{/* -------------------Suggestion------------------- */}
      <div className="suggestions__username" id="AccountID">
          <div className="username__left">
            <span className="avatar">
              <Avatar src="https://i.pravatar.cc/100" />
            </span>
            <div className="username__info">
              <span className="username">Abhishek Vairagar</span>
              <span className="relation">vairagarabhi_008</span>
            </div>
          </div>
          <button className="follow__button">Switch</button>
        </div>

{/* -------------------Suggestion------------------- */}

      <div className="suggestions__username" id="AccountID">
            <div className="username__info">

              <span className="suggestions__title">Suggestions for you</span>
          </div>
          <button className="follow__button">Select All</button>
        </div>
{/* -------------------Suggestion Profile------------------- */}
      <div className="suggestions__usernames">
        <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar">
              {/* <Avatar
                style={{
                  marginRight: "10px",
                  // backgroundColor: "red", // Background color (material UI red)
                  backgroundImage: `url(${imgAvatar})`, // Correct way to set a background image
                  backgroundSize: "cover", // Ensure image covers the avatar area
                }}
              ></Avatar> */}
              <Avatar src="https://i.pravatar.cc/100" />
              </span>
            <div className="username__info">
              <span className="username">Rahul_vv08</span>
              <span className="relation">Followed by ____khot____ and 13 </span>
            </div>
          </div>
          <button className="follow__button">Follow</button>
        </div>

        <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar src="https://i.pravatar.cc/100" />
            </span>
            <div className="username__info">
              <span className="username">redian_1987</span>
              <span className="relation">Followed by ____khot____ and 13 </span>
            </div>
          </div>
          <button className="follow__button">Follow</button>
        </div>

        <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar src="https://i.pravatar.cc/100" />
            </span>
            <div className="username__info">
              <span className="username">Riteshvv19_</span>
              <span className="relation">Followed by tanmayy__.xx and 16</span>
            </div>
          </div>
          <button className="follow__button">Follow</button>
        </div>

        <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar src="https://i.pravatar.cc/100" />
            </span>
            <div className="username__info">
              <span className="username">Raj_08vv</span>
              <span className="relation">Followed by tanmayy__.xx and 16</span>
            </div>
          </div>
          <button className="follow__button">Follow</button>
        </div>
      </div>
    </div>
  );
}

export default Suggestions;
