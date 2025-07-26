import React from "react";

function SongItem({ title, artist, image, id }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        border: "1px solid black",
        padding: "10px",
        borderRadius: "6px",
        marginBottom: "10px",
        width:"100%",
        gap:"20px",
        // justifyContent:"center"
        alignItems:"center"
      }}
    >
      <p> {id} </p>
      <img
        src={image}
        alt=""
        style={{
          height: "160px",
          width: "150px",
        }}
      />
      <div style={{
        // border:"1px solid black"
      }}>
        <b>{title} </b>
        <p> {artist} </p>
      </div>
    </div>
  );
}

export default SongItem;
