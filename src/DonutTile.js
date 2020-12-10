import React from "react";


export const DonutTile = ({donut}) => {
  return (
    <>
    <div className="donut_tile col-md-3">
        <img width="200px" height="200px" src={donut.imageurl} alt="Not Found"></img>
        <p style={{textAlign:"center"}}>{donut.name}</p>
    </div>
    </>
  );
};

export default DonutTile;
