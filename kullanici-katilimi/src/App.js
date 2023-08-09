import axios from "axios";
import FormComponent from "./components/FormComponent.js";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [userList, setUserList] = useState([]);

  const addUser = (newUser) => {
    const updatedUserList = [...userList];
    updatedUserList.push(newUser);
    setUserList(updatedUserList);
  };

  useEffect(() => {
    console.log("user list:", userList);
  }, [userList]);

  return (
    <div className="App">
      <FormComponent pAddUser={addUser} />
    </div>
  );
}

export default App;
