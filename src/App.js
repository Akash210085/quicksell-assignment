import React, { useState, useEffect, useCallback } from "react";
import Header from "./components/Header";
import Grid from "./components/Grid";
import { API_URL } from "./Api";
import { loadGrid, mapUsersByUserId } from "./utils";
import Loader from "./components/Loader";
function App() {
  const [tickets, setTickets] = useState([]);
  const [userData, setUserData] = useState({});
  const [gridData, setGridData] = useState({});
  const [grouping, setGrouping] = useState("status");
  const [ordering, setOrdering] = useState("priority");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(API_URL)
      .then((resp) => resp.json())
      .then((res) => {
        const { tickets, users } = res;
        setTickets(tickets);
        setUserData(mapUsersByUserId(users));
      })
      .catch((err) => {});
  }, []);

  useEffect(() => {
    setGridData(loadGrid(tickets, grouping, ordering));
    setLoading(false);
  }, [grouping, ordering, tickets]);

  const onSetGrouping = useCallback((value) => {
    setLoading(true);
    setGrouping(value);
  }, []);

  const onSetOrdering = useCallback((value) => {
    setLoading(true);
    setOrdering(value);
  }, []);

  return (
    <div className="App">
      <Header
        grouping={grouping}
        setGrouping={onSetGrouping}
        ordering={ordering}
        setOrdering={onSetOrdering}
      />
      {loading ? (
        <Loader />
      ) : (
        <Grid gridData={gridData} grouping={grouping} userIdToData={userData} />
      )}
    </div>
  );
}

export default App;
