import React, { useEffect, useState } from "react";
import FilterInput from "./FilterInput";
import Table from "./Table";
import { getUsers } from "./API";
import "./App.css";

function App() {
  const [initialUsers, updateAvailableUsers] = useState([]);
  const [usersToRender, updateUsersToRender] = useState([]);

  useEffect(() => {
    getUsers().then(({ data: { results } }) => updateAvailableUsers(results));
  }, []);

  return (
    <div className="App">
      <h1>Employee Directory</h1>
      <p>
        Filter by first name by typing in user input below.
        <br></br>
        To sort from A-Z by first name click the "First" column header text.
      </p>
     
      <FilterInput users={initialUsers} updateUsers={updateUsersToRender} />
      <br></br>
      <br></br>
      <Table users={usersToRender} />
    </div>
  );
}

export default App;