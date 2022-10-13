import React, { Component } from "react";
import "./chat.css";
import ChatList from "../../components/chatList/chatList";
import FeedbackList from "../../components/chatList/feedbackList";
import ChatContent from "../../components/chatContent/chatContent";
import FeedbackContent from "../../components/chatContent/feedbackContent";
import NavigationBar from '../../components/navigationBar/navigationBar.jsx';
import SideBar from '../../components/sideBar/sideBar.jsx';
import PetBar from '../../components/petBar/petBar.jsx';
import '../../App.css'
export default class ChatBody extends Component {
  render() {
    return (
      <>
      <NavigationBar /> 
      <div className = 'container'>
      <SideBar />
      <div className='content'>
      <div className="main__chatbody">
        <FeedbackList />
        <FeedbackContent />
      </div>
      </div>
      <PetBar />
    </div>
    </>
    );
  }
}
