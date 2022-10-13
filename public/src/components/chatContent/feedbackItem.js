import React, { Component } from "react";
import Avatar from "../chatList/Avatar";

export default class FeedbackItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="chat__item">
        <div>
           <Avatar isOnline="active" image={this.props.image} />
           <div className="chat__name">{this.props.name}</div>
        </div>
        <div className="chat__item__content">
          <div className="chat__msg">{this.props.msg}</div>
          <div className="chat__meta">
            <span>{this.props.time}</span>
          </div>
        </div> 
      </div>
    );
  }
}