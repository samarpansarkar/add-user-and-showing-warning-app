import React, { useState } from "react";

const User = {
  userId: "sam",
  userAge: 30,
};

const AddUser = (props) => {
  const [userData, setUserData] = useState(User);

  const inputChangeHandler = (input, value) => {
    //console.log('Adduser',userData);
    setUserData((prevUserData) => {
      return {
        ...prevUserData,
        [input]: value,
      };
    });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log("submit");
    props.userData(userData);
  };

  return (
    <form onSubmit={onSubmitHandler} className="form">
      <div className="input-group">
        <p className="input-container">
          <label className="label" htmlFor="userId">
            User Id
          </label>
          <input
            className="input"
            onChange={(event) =>
              inputChangeHandler("userId", event.target.value)
            }
            type="character"
            id="current-savings"
          />
        </p>
        <p className="input-container">
          <label className="label" htmlFor="yearly-contribution">
            User Age(only year)
          </label>
          <input
            className="input"
            onChange={(event) =>
              inputChangeHandler("userAge", event.target.value)
            }
            type="number"
            id="yearly-contribution"
          />
        </p>
      </div>
      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUser;
