import React, { useEffect, useState } from "react";
import DonutTile from './DonutTile'

export const DonutsPage = (props) => {
  let allDonuts = props.donuts.Items;
    console.log(allDonuts)
  return (
    <div className="container">
      <div className="row">
          {allDonuts.map((donut) => {
              return(
                  <DonutTile donut={donut} />
              )
          })}
      </div>
    </div>
  )
};

export default DonutsPage;
