import React from "react";
import { useSelector } from "react-redux";
import "../css/rightContainer.css";
import { Circle } from "./Circle";
export const Right_Container = () => {
  const education = useSelector((state) => state.user.education);
  const language = useSelector((state) => state.user.language);
  const experience = useSelector((state) => state.user.experience);
  return (
    <>
      <div className="right-content">
        <div className="education">
          <h3>EDUCATION</h3>
          {education.map((data) => {
            return (
              <div className="education-item">
                <div className="inst-name">
                  <label>{data.stream}</label>
                  <label>{data.year}</label>
                </div>
                <div className="stream-name">
                  <label>{data.institute}</label>
                </div>
              </div>
            );
          })}
        </div>
        <div className="language">
          <h3>LANGUAGE</h3>
          <p>Lorem Ipsum is simply dummy text </p>
          <div className="language-item">
            {language.map((data) => {
              return (
                <div>
                  <Circle percent={data.percent} title={data.language} />
                </div>
              );
            })}
          </div>
        </div>
        <div className="experience">
          <h3>EXPERIENCE</h3>
          {experience.map((data) => {
            return (
              <div className="education-item">
                <div className="inst-name">
                  <label>{data.position}</label>
                  <label>{data.year}</label>
                </div>
                <div className="stream-name">
                  <label>{data.description}</label>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
