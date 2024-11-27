import React, { useContext, useState } from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets";
import { Context } from "../../Context/Context";
const Sidebar = () => {
  const { onSent, prevPrompt, setrecentPrompt,setloading, setshowResult } =
    useContext(Context);
  const [showSideBar, setshowSideBar] = useState("Show");

  function handleSideBar() {
    if (showSideBar === "Show") setshowSideBar("not-Show");
    else setshowSideBar("Show");
  }
  return (
    <div className={`side-bar ${showSideBar}`}>
      <div className="top">
        <img src={assets.menu_icon} onClick={() => handleSideBar()} alt="" />
        <div className="new-chart" onClick={() => setshowResult(false)}>
          <img src={assets.plus_icon} alt="" />
          {showSideBar === "Show" ? (
            <p className="new-chart-cursor">New Chart</p>
          ) : null}
        </div>
        {showSideBar === "Show" ? (
          <div className="recent">
            <p className="recent-title">Recent</p>
            {console.log(prevPrompt)}
            {prevPrompt &&
              prevPrompt.map((item, index) => {
                return (
                  <div
                    className="recent-item"
                    key={index}
                    onClick={() => 
                     {setloading(true), onSent(item, true)}}
                  >
                    <img src={assets.message_icon} alt="" />
                    <p>{item.slice(0, 18) + "..."}</p>
                  </div>
                );
              })}
          </div>
        ) : null}
      </div>

      <div className="down">
        <div className="down-item df">
          <img src={assets.question_icon} alt="" />
          {showSideBar === "Show" ? <p>Help</p> : null}
        </div>
        <div className="down-item df">
          <img src={assets.history_icon} alt="" />
          {showSideBar === "Show" ? <p>History</p> : null}
        </div>
        <div className="down-item df">
          <img src={assets.setting_icon} alt="" />
          {showSideBar === "Show" ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
