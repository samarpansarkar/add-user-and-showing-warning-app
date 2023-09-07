import './UserList.css';

import React from 'react'

const UserList = (props) => {


  //const userId = props.Data.userId;
  //const [userId ,userAge] = props.Data;
  console.log('userList',props.Data);
  //console.log(userAge);

  return (
    <div>
      <div className='userList-container'>
        <div className='userList-userID'>userId</div>
        <div className='userList-userAge'>userAge</div>
      </div>
    </div>
  )
}

export default UserList
