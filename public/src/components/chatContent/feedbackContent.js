import React, { Component } from "react";
import "./chatContent.css";
import FeedbackItem from "./feedbackItem"
import { IoDuplicateOutline } from "react-icons/io5";
import { IoIosSend } from "react-icons/io";

import AvatarBr from "./Multiavatar-Br.png";





export default class FeedbackContent extends Component {
  chatItems = [
    {
      
      image:
       AvatarBr,
      name: "Steven",
      msg: "Great job on the front so far, Steven! maybe make it more visual and add some new functionalities as we discussed.",
    
      
    },
    {
  
      image:
       AvatarBr,
      name: "Steven",
      msg: "Also maybe change the font from 20pt to 28 pt.",
      
    },
    {
  
      image:
      AvatarBr,
      name: "Steven",
      msg: "Perhaps use the Italic style instead of Bold.",
  
      },

   
 
   
  ];

  constructor(props) {
    super(props);
    this.state = {
      chat: this.chatItems,
      
    };
  }


 
  render() {
    return (
      <div className="main__chatcontent">
        <div className="chat_header">
          <div className="blocks">
            <div className="current-chatting">
             
              <p>Frontend: Clovis </p>
            </div>
          </div>

          <div className="blocks">
            <div className="settings">
            </div>
          </div>
        </div>
        <div className="content__body">
          <div className="chat__items">
            {this.state.chat.map((itm, index) => {
              return (
                <FeedbackItem
                  key={itm.key}
                  name={itm.name}
                  msg={itm.msg}
                  time={itm.time}
                  image={itm.image}
                />
              );
            })}
        
          </div>
        </div>
        <div className="content__footer">
          <div className="sendMsg">
            <button className="addFiles">
              <IoDuplicateOutline />
            </button>
            <input
              type="text"
              placeholder="Leave your feedback here"
            />
            <button className="sendMsgbtn" id="sendMsgBtn">
              <IoIosSend />
            </button>
          </div>
        </div>
      </div>
    );
  }
}