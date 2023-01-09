import React from "react";
import "../css/Profile.css";
import { Left_Container } from "./Left_Container";
import { Right_Container } from "./Right_Container";
export const Profile = () => {
  return (
    <>
      <div className="container">
        <div className="left-container">
          <Left_Container />
        </div>
        <div className="right-container">
          <Right_Container />
        </div>
      </div>
    </>
  );
};
