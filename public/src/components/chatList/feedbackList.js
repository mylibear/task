import React, { Component } from "react";
import "./chatList.css";
import FeedbackListItems from "./feedbackListItems";
import Chat from "../../pages/Chat/chat"
import { useNavigate, Link } from "react-router-dom";

export default class FeedbackList extends Component {

  // const Chat = () => {
  //   navigate("/chat");
  // };
  allChatUsers = [
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
      id: 1,
      name: "Frontend",
    
    },
    {
      image:
        "https://pbs.twimg.com/profile_images/1055263632861343745/vIqzOHXj.jpg",
      id: 2,
      name: "Backend",
      
    },
   
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRZ6tM7Nj72bWjr_8IQ37Apr2lJup_pxX_uZA&usqp=CAU",
      id: 4,
      name: "Game Design",
      
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRJo1MiPQp3IIdp54vvRDXlhbqlhXW9v1v6kw&usqp=CAU",
      id: 5,
      name: "Documentation",
     
    },
    
    
  ];
  constructor(props) {
    super(props);
    this.state = {
      allChats: this.allChatUsers,
    };
  }
  render() {
    return (
      <div className="main__chatlist">
        <div className="chatlist__heading">
          <h2>Task Feedback</h2>
        </div>
        <div className="chatList__search">
          <div className="search_wrap">
            <input type="text" placeholder="Search Task"  />
          </div>
        </div>
        <div className="chatlist__items">
          {this.state.allChats.map((item, index) => {
            return (
              <FeedbackListItems
                name={item.name}
                key={item.id}    
              />
            );
          })}
        </div>
        <button className="btn">
          <span>Switch To Anonymous</span>
        </button>

      </div>
    );
  }
}