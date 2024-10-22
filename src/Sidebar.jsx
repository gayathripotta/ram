import React from "react";
import './Sidebar.css';

function Sidebar({ friends, setSelectedChat }) {
  return (
    <div className="sidebar">
      <h3>Friends List</h3>
      <div className="chats">
        {friends.map((friend, index) => (
          <div
            key={index}
            className="chat-item"
            onClick={() => setSelectedChat(friend)}
          >
            <div className={`status ${friend.status}`}></div>
            <div className="chat-info">
              <h4>{friend.name}</h4>
              <p>{friend.lastMessage || "No messages yet"}</p>
            </div>
            <span>{friend.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
