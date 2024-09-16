import React, { useState, useEffect } from "react";
import "./Namecard.css";
import axios from "axios";

const Namecard = () => {
  const [namecards, setNamecards] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/namecards")
      .then((response) => {
        setNamecards(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const bgColor = ["/card-pink.svg", "/card-yellow.svg", "/card-blue.svg"];
  const htColor = ["#ff77ba", "#FCB05D", "#5583FF"];

  return (
    <div>
      <div className="container">
        <header className="header">
          <button className="backBtn" type="button">
            <img
              src={process.env.PUBLIC_URL + "/backBtn.svg"}
              alt="Avatar"
              className="backBtn"
            />
          </button>
          <h1 className="title">성윤정 님의 명함</h1>
          <button className="shareBtn">
            <img
              src={process.env.PUBLIC_URL + "/shareBtn.svg"}
              alt="Avatar"
              className="shareBtn"
            />
          </button>
        </header>
        {namecards.map((namecard, index) => (
          <div
            className="cards-container"
            key={namecard.id}
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + bgColor[index % bgColor.length]
              })`,
            }}
          >
            <div className="card">
              <div className="info">
                <div className="infoLeft">
                  <div className="myName">{namecard.name}</div>
                  <div className="myBirth">{namecard.birth}</div>
                  <div className="myAffiliation">{namecard.belong}</div>
                  <div className="myJob">{namecard.job}</div>
                </div>
                <div className="infoRight">
                  <div
                    className="myHashtag"
                    style={{ color: htColor[index % htColor.length] }}
                  >
                    {namecard.hashtag}
                  </div>
                </div>
              </div>
              <img
                src={process.env.PUBLIC_URL + namecard.profile}
                alt="Avatar"
                className="myAvatar"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Namecard;
