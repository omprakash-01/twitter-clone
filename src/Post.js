import React, { forwardRef, useState } from "react";
import "./Post.css";
import Capture from "./Capture.jpg"
import { Avatar } from "@mui/material";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PublishIcon from "@mui/icons-material/Publish";

const Post = forwardRef(
  ({ displayName, username, verified, text, image, avatar }, ref) => {
    
    var [like,setLike] = useState(0);
  
    function handlelikes(){
      console.log("you clicked on this");
      setLike = like + 1;
      console.log(setLike);
      
    }
    return (
      <div className="post" ref={ref}>
        <div className="post__avatar">
          <Avatar src={avatar} />
        </div>
        <div className="post__body">
          <div className="post__header">
            <div className="post__headerText">
              <h3>
                {displayName ? displayName : "UNKNOWN_USER" }{" "}
                <span className="post__headerSpecial">


               {/* for checking icons working or not <VerifiedUserIcon className="post__badge" />  */}
                  
                  
                  
                  {verified && <VerifiedUserIcon className="post__badge" />} @
                  {username ? username : "UNKNOWN_USER"}
                </span>
              </h3>
            </div>
            <div className="post__headerDescription">
              <p>{text ? text : "Lets build twitter-clone with Our team"}</p>
            </div>
          </div>
          <img src={image ? image : Capture} alt="" />
          <div className="post__footer">
            <button >
            <ChatBubbleOutlineIcon fontSize="small" />
            </button>
            <button onClick={handlelikes}><FavoriteBorderIcon fontSize="small" />{like}</button>
            
            <RepeatIcon fontSize="small" />
           
            <PublishIcon fontSize="small" />
          </div>
        </div>
      </div>
    );
  }
);

export default Post;
