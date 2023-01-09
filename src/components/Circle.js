import React, { useEffect, useState } from "react";
import "../css/circle.css";
export const Circle = (props) => {
  const percent = props.percent;
  return (
    <>
      <div>
        <div
          className="circle"
          style={{
            backgroundImage: `conic-gradient(#555 ${percent}%, #eeeeee 0)`,
          }}
        >
          <div className="inner">
            <label className="percentage-title">{props.title}</label>
          </div>
        </div>
      </div>
    </>
  );
};
