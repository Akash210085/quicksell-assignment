import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Grid from "./components/Grid";
import { API_URL } from "./Api";
import {
  groupTicketsByPriority,
  groupTicketsByStatus,
  groupTicketsByUserId,
  mapUsersByUserId,
} from "./utils";

function App() {
  const [tickets, setTickets] = useState([]);
  const [userData, setUserData] = useState({});
  const [gridData, setGridData] = useState({});

  useEffect(() => {
    fetch(API_URL)
      .then((resp) => resp.json())
      .then((res) => {
        const { tickets, users } = res;
        setTickets(tickets);
        setUserData(mapUsersByUserId(users));
        setGridData(groupTicketsByUserId(tickets));
      })
      .catch((err) => {});
  }, []);

  return (
    <div className="App">
      <Header />
      {/* <Grid gridData={gridData} grouping={"status"} userIdToData={userData} /> */}
      {/* <Grid gridData={gridData} grouping={"priority"} userIdToData={userData} /> */}
      <Grid gridData={gridData} grouping={"user"} userIdToData={userData} />
    </div>
  );
}

export default App;
