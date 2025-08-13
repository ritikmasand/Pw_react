import React from "react";
import { useParams } from "react-router-dom";

function Data() {
  const { UserID } = useParams();

  return (
    <div>
      <h2>Data Loading.... </h2>
      <h3> {UserID ? `This is UserId : ${UserID}` : "No User Selected"} </h3>
    </div>
  );
}

export default Data;
