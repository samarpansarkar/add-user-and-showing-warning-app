import "./App.css";
import AddUser from "./Components/AddUser/AddUser";
import ErrorModel from "./Components/ErrorModel/ErrorModel";

import React, { useState } from "react";
import UserList from "./Components/UsersList/UserList";

const App = () => {
  //const [userInput, setUserInput] = useState(null);

  // const userInputHandler=(userData)=>{
  //   setUserInput(userData);
  //   console.log('use Input',userInput);
  // };

  const Data = [];

  const userInputHandler = (userData) => {
    if (userData) {
      let userId = userData["userId"];
      let userAge = +userData["userAge"];

      Data.push({ userId, userAge});
      //console.log("app.js", Data);
    }
  };

  return (
    <div className="App">
      <AddUser userData={userInputHandler} />
      <UserList userData={Data} />
      <ErrorModel />
    </div>
  );
};
export default App;
