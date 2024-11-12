import React, { useMemo } from "react";
import "./grid.css";
import Column from "../Column/Column";

function Grid({ gridData, grouping, userIdToData }) {
  const columnKeys = useMemo(() => Object.keys(gridData), [gridData]);

  return (
    <div className="grid">
      {columnKeys.map((key) => (
        <Column
          key={key}
          tickets={gridData[key]}
          grouping={grouping}
          groupBy={key}
          userIdToData={userIdToData}
        />
      ))}
    </div>
  );
}

export default Grid;
