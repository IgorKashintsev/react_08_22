import React from "react";
import style from '../components/Message.module.css';

export class Message extends React.Component {

  render() {
    return (
      <div className="Message">
        <p>Message-Class: {this.props.message}</p>
        <p className={style.Message}>New Message-Class: {this.props.newMessage}</p>
        <input type="text" onChange={this.props.changeMessage}/>
      </div>
    );
  }
}