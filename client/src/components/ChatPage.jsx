import { React, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { LogOut } from 'lucide-react';
import axios from 'axios';

function ChatPage() {
  const navigateTo = useNavigate();
  const [userList, setUserList] = useState([]);
  useEffect(() => {
    axios
      .get("/user/getUser")
      .then(res => {
        console.log(res)
        setUserList(res.data)
      })
      .catch(err => console.error(err));

  }, []);

  let selectedUser = "";


  const handleClick = () => {
    axios
      .post("/user/logout")
      .then(res => {
        console.log(res);
        if (res) navigateTo("/login");
      })
      .catch(err => console.error(err));
  }

  return (

    <div className="flex h-screen bg-slate-950 border-4">
      {/* Sidebar */}
      <div className="w-1/4 p-4 border-r-4">
        <div className='flex justify-between items-center'>
          <div>
            <img
              className="inline-block h-10 w-10 rounded-full"
              src="https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg"
              alt=""
            />
          </div>
          <div><h2 className="text-2xl font-bold mb-2">Users</h2></div>
          <button className='text-red-500' onClick={handleClick}><LogOut /></button>
        </div>
        <ul>
          {userList.map((user) => (
            <li
              key={user._id}
              className={`cursor-pointer p-2 rounded ${selectedUser === user ? 'bg-blue-500 text-white' : 'hover:bg-gray-300'}`}
            // onClick={() => handleUserClick(user)}
            >
              {user.userName}
            </li>
          ))}
        </ul>
      </div>
      {/* Chat Area */}
      <div className="flex-1 p-4">
        {selectedUser ? (
          <div>
            <h2 className="text-lg font-bold mb-4">Chatting with {selectedUser.name}</h2>
            <div className="chat-messages">
              {/* {messages.map((message, index) => (
                <div key={index} className="mb-2">
                  {message}
                </div>
              ))} */}
            </div>
            {/* Add Chat Input Component */}
            {/* <ChatInput onSubmit={handleMessageSubmit} /> */}
          </div>
        ) : (
          <div className="text-center">Select a user to start chatting</div>
        )}
      </div>
    </div>
  )
}

export default ChatPage
