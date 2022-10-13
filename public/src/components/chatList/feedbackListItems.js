import React, { Component } from "react";
export default class ChatListItems extends Component {
  constructor(props) {
    super(props);
  }
 

  render() {
    return (
      <div className="chatlist__item" >
        <div className="userInfo">
          <p>{this.props.name}</p>
          {/* <span className="activeTime">5 mins ago</span> */}
        </div>
      </div>
    );
  }
}