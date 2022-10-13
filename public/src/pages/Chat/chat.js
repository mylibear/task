import React, { Component } from "react";
import "./chat.css";
import ChatList from "../../components/chatList/chatList";
import ChatContent from "../../components/chatContent/chatContent";
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
        <ChatList />
        <ChatContent />
      </div>
      </div>
      <PetBar />
    </div>
    </>
    );
  }
}
