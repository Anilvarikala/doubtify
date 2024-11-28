import React, { useContext } from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
import { Context } from "../../Context/Context";

const Main = () => {
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && Input.trim() !== "") {
      // Handle the submission
      console.log("User Input:", Input);
      onSent(Input);
      setloading(true);
      // Clear the input field
      e.target.value = "";
    }
  };
  const {
    Input,
    setInput,
    onSent,
    loading,
    setloading,
    setshowResult,
    showResult,
    resultData,
    setresultData,
    recentPrompt,
    setrecentPrompt,
  } = useContext(Context);
  return (
    <div className="main">
      <div className="nav">
        <p>ChatAi</p>
        <img src={assets.user_icon} alt="" />
      </div>

      {!showResult ? (
        <>
          <div className="main-container">
            <div className="greet">
              {" "}
              <p>
                <span>Hello Learner</span>
              </p>
              <p>How can i help you today ? </p>
            </div>
          </div>
          <div className="cards">
            <div
              className="card"
              // onClick={() =>
              //   onSent("Suggest me the best movies in telugu cinema")
              // }
            >
              <p>Suggest me the best movies in telugu cinema.</p>
              <img src={assets.compass_icon} alt="" />
            </div>
            <div
              className="card"
              // onClick={() =>
              //   onSent(
              //     "Give me the history and evoultion of artifical intelligence."
              //   )
              // }
            >
              <p>
                Give me the history and evoultion of artifical intelligence.
              </p>
              <img src={assets.bulb_icon} alt="" />
            </div>
            <div
              className="card"
              // onClick={() =>
              //   onSent("Prepare me today with my daily challenges.")
              // }
            >
              <p>Prepare me today with my daily challenges.</p>
              <img src={assets.message_icon} alt="" />
            </div>
            <div
              className="card"
              // onClick={() =>
              //   onSent(
              //     "Lets do chatting for an 4 hours daily to improve my writing"
              //   )
              // }
            >
              <p>
                Lets do chatting for an 4 hours daily to improve my writing
                skills.
              </p>
              <img src={assets.code_icon} alt="" />
            </div>
          </div>
        </>
      ) : (
        <div className="result">
          <div className="result-main-title">
            <img src={assets.user_icon} className="user-img" alt="" />
            <p>{recentPrompt && recentPrompt}</p>
          </div>
          <div className="result-data">
            <img src={assets.gemini_icon} alt="" />
            {loading ? (
              <div className="loader">
                <hr />
                <hr />
                <hr />
              </div>
            ) : (
              <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
            )}
          </div>
        </div>
      )}

      <div className="main-bottom">
        <div className="search-box">
          <input
            type="text"
            name="chatInput"
            value={Input}
            onChange={(e) => setInput(e.target.value)}
            id="chatInput"
            onKeyDown={handleKeyDown}
            placeholder="Enter prompt here."
          />
          <div className="main-down-icons">
            {/* <img src={assets.gallery_icon} alt="" />
          <img src={assets.mic_icon} alt="" /> */}
            {Input ? (
              <img
                onClick={() => onSent(Input)}
                src={assets.send_icon}
                alt=""
              />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
