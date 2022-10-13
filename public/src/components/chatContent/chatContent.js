import React, { Component } from "react";
import "./chatContent.css";
import ChatItem from "./chatItem"
import { IoDuplicateOutline } from "react-icons/io5";
import { IoIosSend } from "react-icons/io";
import Avatar3d from "./Multiavatar-3d.png"
import Avatara5 from "./Multiavatar-a5.png";
import AvatarBr from "./Multiavatar-Br.png";
import Avatarf26 from "./Multiavatar-f26.png"




export default class ChatContent extends Component {
  chatItems = [
    {
      
      image:
       AvatarBr,
      name: "Clovis",
      msg: "Hi are we going to have a meeting today? I can join after 5",
      time:"16:17",
      
    },
    {
  
      image:
      Avatar3d,
      name: "Karen",
      msg: "yeah im also ready",
      time:"16:18",
    },
    {
  
      image:
      Avatarf26,
      name: "Steven",
      msg: "Can we do 5:30?",
      time:"16:27",
    },
    {
 
      image:
        Avatara5,
      name: "Serge",
      msg: "Sure, I’ll have to leave at 6 though as I have a dancing class after",
      time:"16:29",
    },
    {
    
      image:
        AvatarBr,
      name: "Clovis",
      msg: "I may be 5 minuets late, you guys can start first",
      time:"16:37",
    },
    {
   
      image:
      Avatar3d,
      name: "Karen",
      msg: "Meeting up",
      time:"17:27",
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
             
              <p>Six Muskeeters</p>
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
                <ChatItem
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
              placeholder="Type a message here"
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