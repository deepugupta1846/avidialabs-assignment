import React from "react";
import { useSelector } from "react-redux";
import "../css/leftContainer.css";
export const Left_Container = () => {
  const personal_data = useSelector((state) => state.user.personalData);
  const skill = useSelector((state) => state.user.skill);
  const contact = useSelector((state) => state.user.contact);
  console.log(personal_data);
  return (
    <>
      <div className="left-content">
        <div className="profile-image">
          <img src={personal_data.image} />
        </div>
        <div className="title">
          <h1>{personal_data.fullname}</h1>
          <h2>{personal_data.role}</h2>
        </div>
        <div className="about">
          <h3>ABOUT ME</h3>
          <p>{personal_data.about}</p>
        </div>
        <div className="skill">
          {skill.map((data, index) => {
            return (
              <div key={index} className="skill-item">
                <div className="skill-name">{data.skillName}</div>
                <div
                  className="progress-bar"
                  style={{
                    width: "80%",
                    height: "10px",
                    backgroundColor: "#ffffff",
                    marginTop: "10px",
                  }}
                >
                  <div
                    className="inner-progress-bar"
                    style={{
                      width: `${data.percent}`,
                      height: "10px",
                      backgroundColor: "#555",
                    }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="contact">
          <h3>CONTACTS</h3>
          <p>{contact.email}</p>
          <p>{contact.phone}</p>
        </div>
      </div>
    </>
  );
};
