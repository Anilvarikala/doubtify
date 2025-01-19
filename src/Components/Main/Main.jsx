// import React, { useState, useContext, useEffect } from "react";
// import "./Main.css";
// import { assets } from "../../assets/assets";
// import { Context } from "../../Context/Context";
// import { useNavigate } from "react-router-dom";

// const Main = () => {
//   const [dropdownVisible, setDropdownVisible] = useState(false);
//   const [isListening, setIsListening] = useState(false);
//   const navigate = useNavigate();

//   // Check if the user is authenticated
//   const isAuthenticated = localStorage.getItem("isAuthenticated");

//   // If the user is not authenticated, redirect them to login page
//   useEffect(() => {
//     if (!isAuthenticated) {
//       navigate("/login");
//     }
//   }, [isAuthenticated, navigate]);

//   const toggleDropdown = () => {
//     setDropdownVisible(!dropdownVisible);
//   };

//   const handleLogout = () => {
//     localStorage.removeItem("isAuthenticated"); // Clear auth flag
//     navigate("/login"); // Redirect to login page
//   };

//   const handleKeyDown = (e) => {
//     if (e.key === "Enter" && Input.trim() !== "") {
//       console.log("User Input:", Input);
//       onSent(Input);
//       setloading(true);
//       e.target.value = "";
//     }
//   };

//   const {
//     Input,
//     setInput,
//     onSent,
//     loading,
//     setloading,
//     setshowResult,
//     showResult,
//     resultData,
//     setresultData,
//     recentPrompt,
//     setrecentPrompt,
//   } = useContext(Context);

//   // Start Speech Recognition
//   const startListening = () => {
//     if (!("webkitSpeechRecognition" in window)) {
//       alert("Speech recognition is not supported in this browser.");
//       return;
//     }

//     const recognition = new window.webkitSpeechRecognition();
//     recognition.continuous = false; // Stop recording after the user stops speaking
//     recognition.interimResults = false; // Show interim results while speaking
//     recognition.lang = "en-US"; // Set language to English

//     recognition.onstart = () => {
//       setIsListening(true); // Set listening state when recognition starts
//     };

//     recognition.onend = () => {
//       setIsListening(false); // Set listening state to false when recognition ends
//     };

//     recognition.onerror = (event) => {
//       console.error("Speech recognition error:", event.error);
//       setIsListening(false);
//     };

//     recognition.onresult = (event) => {
//       const transcript = event.results[0][0].transcript; // Get the recognized speech
//       setInput(transcript); // Store the recognized speech in state
//     };

//     recognition.start(); // Start the speech recognition
//   };

//   return (
//     <div className="main">
//       <div className="nav">
//         <p>ChatAi</p>
//         <div className="user-icon-container" onClick={toggleDropdown}>
//           <img src={assets.user_icon} alt="User Icon" />
//           {dropdownVisible && (
//             <div className="dropdown-menu">
//               <p onClick={handleLogout}>Logout</p>
//             </div>
//           )}
//         </div>
//       </div>

//       {!showResult ? (
//         <>
//           <div className="main-container">
//             <div className="greet">
//               <p>
//                 <span>Hello Learner</span>
//               </p>
//               <p>How can I help you today?</p>
//             </div>
//           </div>
//           <div className="cards">
//             <div className="card">
//               <p>Suggest me the best movies in Telugu cinema.</p>
//               <img src={assets.compass_icon} alt="" />
//             </div>
//             <div className="card">
//               <p>
//                 Give me the history and evolution of artificial intelligence.
//               </p>
//               <img src={assets.bulb_icon} alt="" />
//             </div>
//             <div className="card">
//               <p>Prepare me today with my daily challenges.</p>
//               <img src={assets.message_icon} alt="" />
//             </div>
//             <div className="card">
//               <p>
//                 Let's do chatting for 4 hours daily to improve my writing
//                 skills.
//               </p>
//               <img src={assets.code_icon} alt="" />
//             </div>
//           </div>
//         </>
//       ) : (
//         <div className="result">
//           <div className="result-main-title">
//             <img src={assets.user_icon} className="user-img" alt="" />
//             <p>{recentPrompt && recentPrompt}</p>
//           </div>
//           <div className="result-data">
//             <img src={assets.gemini_icon} alt="" />
//             {loading ? (
//               <div className="loader">
//                 <hr />
//                 <hr />
//                 <hr />
//               </div>
//             ) : (
//               <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
//             )}
//           </div>
//         </div>
//       )}

//       <div className="main-bottom">
//         <div className="search-box">
//           <input
//             type="text"
//             name="chatInput"
//             value={Input}
//             onChange={(e) => setInput(e.target.value)}
//             id="chatInput"
//             onKeyDown={handleKeyDown}
//             placeholder="Enter prompt here."
//           />
//           <div className="main-down-icons">
//             <img src={assets.gallery_icon} alt="" className="icon-gallery" />
//             <img
//               src={assets.mic_icon}
//               alt=""
//               className="icon-mic"
//               onClick={startListening}
//             />
//             {isListening && <span>Recording...</span>}
//             {Input && (
//               <img
//                 onClick={() => onSent(Input)}
//                 src={assets.send_icon}
//                 alt=""
//                 className="send-icon"
//               />
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Main;

// import React, { useState, useContext } from "react";
// import "./Main.css";
// import { assets } from "../../assets/assets";
// import { Context } from "../../Context/Context";
// import { useNavigate } from "react-router-dom";

// const Main = () => {
//   const [dropdownVisible, setDropdownVisible] = useState(false);
//   const navigate = useNavigate();

//   const toggleDropdown = () => {
//     setDropdownVisible(!dropdownVisible);
//   };

//   const handleLogout = () => {
//     localStorage.removeItem("isAuthenticated"); // Clear auth flag
//     navigate("/login"); // Redirect to login page
//   };

//   const handleKeyDown = (e) => {
//     if (e.key === "Enter" && Input.trim() !== "") {
//       console.log("User Input:", Input);
//       onSent(Input);
//       setloading(true);
//       e.target.value = "";
//     }
//   };

//   const {
//     Input,
//     setInput,
//     onSent,
//     loading,
//     setloading,
//     setshowResult,
//     showResult,
//     resultData,
//     setresultData,
//     recentPrompt,
//     setrecentPrompt,
//   } = useContext(Context);

//   return (
//     <div className="main">
//       <div className="nav">
//         <p>ChatAi</p>
//         <div className="user-icon-container" onClick={toggleDropdown}>
//           <img src={assets.user_icon} alt="User Icon" />
//           {dropdownVisible && (
//             <div className="dropdown-menu">
//               <p onClick={handleLogout}>Logout</p>
//             </div>
//           )}
//         </div>
//       </div>

//       {!showResult ? (
//         <>
//           <div className="main-container">
//             <div className="greet">
//               <p>
//                 <span>Hello Learner</span>
//               </p>
//               <p>How can I help you today?</p>
//             </div>
//           </div>
//           <div className="cards">
//             <div className="card">
//               <p>Suggest me the best movies in Telugu cinema.</p>
//               <img src={assets.compass_icon} alt="" />
//             </div>
//             <div className="card">
//               <p>
//                 Give me the history and evolution of artificial intelligence.
//               </p>
//               <img src={assets.bulb_icon} alt="" />
//             </div>
//             <div className="card">
//               <p>Prepare me today with my daily challenges.</p>
//               <img src={assets.message_icon} alt="" />
//             </div>
//             <div className="card">
//               <p>
//                 Let's do chatting for 4 hours daily to improve my writing
//                 skills.
//               </p>
//               <img src={assets.code_icon} alt="" />
//             </div>
//           </div>
//         </>
//       ) : (
//         <div className="result">
//           <div className="result-main-title">
//             <img src={assets.user_icon} className="user-img" alt="" />
//             <p>{recentPrompt && recentPrompt}</p>
//           </div>
//           <div className="result-data">
//             <img src={assets.gemini_icon} alt="" />
//             {loading ? (
//               <div className="loader">
//                 <hr />
//                 <hr />
//                 <hr />
//               </div>
//             ) : (
//               <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
//             )}
//           </div>
//         </div>
//       )}

//       <div className="main-bottom">
//         <div className="search-box">
//           <input
//             type="text"
//             name="chatInput"
//             value={Input}
//             onChange={(e) => setInput(e.target.value)}
//             id="chatInput"
//             onKeyDown={handleKeyDown}
//             placeholder="Enter prompt here."
//           />
//           <div className="main-down-icons">
//             <img src={assets.gallery_icon} alt="" />
//             <img src={assets.mic_icon} alt="" />
//             {Input ? (
//               <img
//                 onClick={() => onSent(Input)}
//                 src={assets.send_icon}
//                 alt=""
//               />
//             ) : null}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Main;

// import React, { useState, useContext, useEffect } from "react";
// import "./Main.css";
// import { assets } from "../../assets/assets";
// import { Context } from "../../Context/Context";
// import { useNavigate } from "react-router-dom";

// const Main = () => {
//   const [dropdownVisible, setDropdownVisible] = useState(false);
//   const navigate = useNavigate();

//   // Check if the user is authenticated
//   const isAuthenticated = localStorage.getItem("isAuthenticated");

//   // If the user is not authenticated, redirect them to login page
//   useEffect(() => {
//     if (!isAuthenticated) {
//       navigate("/login");
//     }
//   }, [isAuthenticated, navigate]);

//   const toggleDropdown = () => {
//     setDropdownVisible(!dropdownVisible);
//   };

//   const handleLogout = () => {
//     localStorage.removeItem("isAuthenticated"); // Clear auth flag
//     navigate("/login"); // Redirect to login page
//   };

//   const handleKeyDown = (e) => {
//     if (e.key === "Enter" && Input.trim() !== "") {
//       console.log("User Input:", Input);
//       onSent(Input);
//       setloading(true);
//       e.target.value = "";
//     }
//   };

//   const {
//     Input,
//     setInput,
//     onSent,
//     loading,
//     setloading,
//     setshowResult,
//     showResult,
//     resultData,
//     setresultData,
//     recentPrompt,
//     setrecentPrompt,
//   } = useContext(Context);

//   return (
//     <div className="main">
//       <div className="nav">
//         <p>ChatAi</p>
//         <div className="user-icon-container" onClick={toggleDropdown}>
//           <img src={assets.user_icon} alt="User Icon" />
//           {dropdownVisible && (
//             <div className="dropdown-menu">
//               <p onClick={handleLogout}>Logout</p>
//             </div>
//           )}
//         </div>
//       </div>

//       {!showResult ? (
//         <>
//           <div className="main-container">
//             <div className="greet">
//               <p>
//                 <span>Hello Learner</span>
//               </p>
//               <p>How can I help you today?</p>
//             </div>
//           </div>
//           <div className="cards">
//             <div className="card">
//               <p>Suggest me the best movies in Telugu cinema.</p>
//               <img src={assets.compass_icon} alt="" />
//             </div>
//             <div className="card">
//               <p>
//                 Give me the history and evolution of artificial intelligence.
//               </p>
//               <img src={assets.bulb_icon} alt="" />
//             </div>
//             <div className="card">
//               <p>Prepare me today with my daily challenges.</p>
//               <img src={assets.message_icon} alt="" />
//             </div>
//             <div className="card">
//               <p>
//                 Let's do chatting for 4 hours daily to improve my writing
//                 skills.
//               </p>
//               <img src={assets.code_icon} alt="" />
//             </div>
//           </div>
//         </>
//       ) : (
//         <div className="result">
//           <div className="result-main-title">
//             <img src={assets.user_icon} className="user-img" alt="" />
//             <p>{recentPrompt && recentPrompt}</p>
//           </div>
//           <div className="result-data">
//             <img src={assets.gemini_icon} alt="" />
//             {loading ? (
//               <div className="loader">
//                 <hr />
//                 <hr />
//                 <hr />
//               </div>
//             ) : (
//               <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
//             )}
//           </div>
//         </div>
//       )}

//       <div className="main-bottom">
//         <div className="search-box">
//           <input
//             type="text"
//             name="chatInput"
//             value={Input}
//             onChange={(e) => setInput(e.target.value)}
//             id="chatInput"
//             onKeyDown={handleKeyDown}
//             placeholder="Enter prompt here."
//           />
//           <div className="main-down-icons">
//             <img src={assets.gallery_icon} alt="" />
//             <img src={assets.mic_icon} alt="" />
//             {Input ? (
//               <img
//                 onClick={() => onSent(Input)}
//                 src={assets.send_icon}
//                 alt=""
//               />
//             ) : null}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Main;

// import React, { useState, useContext, useEffect } from "react";
// import "./Main.css";
// import { assets } from "../../assets/assets";
// import { Context } from "../../Context/Context";
// import { useNavigate } from "react-router-dom";

// const Main = () => {
//   const [dropdownVisible, setDropdownVisible] = useState(false);
//   const [isListening, setIsListening] = useState(false);
//   const navigate = useNavigate();

//   // Check if the user is authenticated
//   const isAuthenticated = localStorage.getItem("isAuthenticated");

//   // If the user is not authenticated, redirect them to login page
//   useEffect(() => {
//     if (!isAuthenticated) {
//       navigate("/login");
//     }
//   }, [isAuthenticated, navigate]);

//   const toggleDropdown = () => {
//     setDropdownVisible(!dropdownVisible);
//   };

//   const handleLogout = () => {
//     localStorage.removeItem("isAuthenticated"); // Clear auth flag
//     navigate("/login"); // Redirect to login page
//   };

//   const handleKeyDown = (e) => {
//     if (e.key === "Enter" && Input.trim() !== "") {
//       console.log("User Input:", Input);
//       onSent(Input);
//       setloading(true);
//       e.target.value = "";
//     }
//   };

//   const {
//     Input,
//     setInput,
//     onSent,
//     loading,
//     setloading,
//     setshowResult,
//     showResult,
//     resultData,
//     setresultData,
//     recentPrompt,
//     setrecentPrompt,
//   } = useContext(Context);

//   // Start Speech Recognition
//   const startListening = () => {
//     if (!("webkitSpeechRecognition" in window)) {
//       alert("Speech recognition is not supported in this browser.");
//       return;
//     }

//     const recognition = new window.webkitSpeechRecognition();
//     recognition.continuous = false; // Stop recording after the user stops speaking
//     recognition.interimResults = false; // Show interim results while speaking
//     recognition.lang = "en-US"; // Set language to English

//     recognition.onstart = () => {
//       setIsListening(true); // Set listening state when recognition starts
//     };

//     recognition.onend = () => {
//       setIsListening(false); // Set listening state to false when recognition ends
//     };

//     recognition.onerror = (event) => {
//       console.error("Speech recognition error:", event.error);
//       setIsListening(false);
//     };

//     recognition.onresult = (event) => {
//       const transcript = event.results[0][0].transcript; // Get the recognized speech
//       onSent(transcript); // Store the recognized speech in state
//     };

//     recognition.start(); // Start the speech recognition
//   };

//   return (
//     <div className="main">
//       <div className="nav">
//         <p>ChatAi</p>
//         <div className="user-icon-container" onClick={toggleDropdown}>
//           <img src={assets.user_icon} alt="User Icon" />
//           {dropdownVisible && (
//             <div className="dropdown-menu">
//               <p onClick={handleLogout}>Logout</p>
//             </div>
//           )}
//         </div>
//       </div>

//       {!showResult ? (
//         <>
//           <div className="main-container">
//             <div className="greet">
//               <p>
//                 <span>Hello Learner</span>
//               </p>
//               <p>How can I help you today?</p>
//             </div>
//           </div>
//           <div className="cards">
//             <div className="card">
//               <p>Suggest me the best movies in Telugu cinema.</p>
//               <img src={assets.compass_icon} alt="" />
//             </div>
//             <div className="card">
//               <p>
//                 Give me the history and evolution of artificial intelligence.
//               </p>
//               <img src={assets.bulb_icon} alt="" />
//             </div>
//             <div className="card">
//               <p>Prepare me today with my daily challenges.</p>
//               <img src={assets.message_icon} alt="" />
//             </div>
//             <div className="card">
//               <p>
//                 Let's do chatting for 4 hours daily to improve my writing
//                 skills.
//               </p>
//               <img src={assets.code_icon} alt="" />
//             </div>
//           </div>
//         </>
//       ) : (
//         <div className="result">
//           <div className="result-main-title">
//             <img src={assets.user_icon} className="user-img" alt="" />
//             <p>{recentPrompt && recentPrompt}</p>
//           </div>
//           <div className="result-data">
//             <img src={assets.gemini_icon} alt="" />
//             {loading ? (
//               <div className="loader">
//                 <hr />
//                 <hr />
//                 <hr />
//               </div>
//             ) : (
//               <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
//             )}
//           </div>
//         </div>
//       )}

//       <div className="main-bottom">
//         <div className="search-box">
//           <input
//             type="text"
//             name="chatInput"
//             value={Input}
//             onChange={(e) => setInput(e.target.value)}
//             id="chatInput"
//             onKeyDown={handleKeyDown}
//             placeholder="Enter prompt here."
//           />
//           <div className="main-down-icons">
//             <img
//               src={assets.gallery_icon}
//               alt=""
//               className="icon-gallery"
//             />
//             <img
//               src={assets.mic_icon}
//               alt=""
//               className="icon-mic"
//               onClick={startListening}
//             />
//             {isListening && <span>Listening...</span>}
//             {Input && (
//               <img
//                 onClick={() => onSent(Input)}
//                 src={assets.send_icon}
//                 alt=""
//                 className="send-icon"
//               />
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Main;

// import React, { useState, useContext, useEffect } from "react";
// import "./Main.css";
// import { assets } from "../../assets/assets";
// import { Context } from "../../Context/Context";
// import { useNavigate } from "react-router-dom";

// const Main = () => {
//   const [dropdownVisible, setDropdownVisible] = useState(false);
//   const [isListening, setIsListening] = useState(false);
//   const [isRecording, setIsRecording] = useState(false); // New state to track if recording
//   const navigate = useNavigate();

//   // Check if the user is authenticated
//   const isAuthenticated = localStorage.getItem("isAuthenticated");

//   // If the user is not authenticated, redirect them to login page
//   // useEffect(() => {
//   //   if (!isAuthenticated) {
//   //     navigate("/login");
//   //   }
//   // }, [isAuthenticated, navigate]);

//   const toggleDropdown = () => {
//     setDropdownVisible(!dropdownVisible);
//   };

//   const handleKeyDown = (e) => {
//     if (e.key === "Enter" && Input.trim() !== "") {
//       console.log("User Input:", Input);
//       onSent(Input);
//       setloading(true);
//       e.target.value = "";
//     }
//   };

//   const {
//     Input,
//     setInput,
//     onSent,
//     loading,
//     setloading,
//     setshowResult,
//     showResult,
//     resultData,
//     setresultData,
//     recentPrompt,
//     setrecentPrompt,
//   } = useContext(Context);

//   // Start Speech Recognition
//   const startListening = () => {
//     if (!("webkitSpeechRecognition" in window)) {
//       alert("Speech recognition is not supported in this browser.");
//       return;
//     }

//     const recognition = new window.webkitSpeechRecognition();
//     recognition.continuous = false; // Stop recording after the user stops speaking
//     recognition.interimResults = false; // Show interim results while speaking
//     recognition.lang = "en-US"; // Set language to English

//     recognition.onstart = () => {
//       setIsRecording(true); // Set recording state when recognition starts
//       setIsListening(true); // Set listening state when recognition starts
//     };

//     recognition.onend = () => {
//       setIsRecording(false); // Set recording state to false when recognition ends
//       setIsListening(false); // Set listening state to false when recognition ends
//     };

//     recognition.onerror = (event) => {
//       console.error("Speech recognition error:", event.error);
//       setIsRecording(false); // Stop recording on error
//       setIsListening(false); // Stop listening on error
//     };

//     recognition.onresult = (event) => {
//       const transcript = event.results[0][0].transcript; // Get the recognized speech
//        onSent(transcript); // Store the recognized speech in state
//     };

//     recognition.start(); // Start the speech recognition
//   };

//   return (
//     <div className="main">
//       <div className="nav">
//         <p>ChatAi</p>
//         {/* <div className="user-icon-container" onClick={toggleDropdown}>
//           <img src={assets.user_icon} alt="User Icon" />
//           {dropdownVisible && (
//             <div className="dropdown-menu">
//               <p onClick={handleLogout}>Logout</p>
//             </div>
//           )}
//         </div> */}
//       </div>

//       {!showResult ? (
//         <>
//           <div className="main-container">
//             <div className="greet">
//               <p>
//                 <span>Hello Learner</span>
//               </p>
//               <p>How can I help you today?</p>
//             </div>
//           </div>
//           <div className="cards">
//             <div className="card">
//               <p>Suggest me the best movies in Telugu cinema.</p>
//               <img src={assets.compass_icon} alt="" />
//             </div>
//             <div className="card">
//               <p>
//                 Give me the history and evolution of artificial intelligence.
//               </p>
//               <img src={assets.bulb_icon} alt="" />
//             </div>
//             <div className="card">
//               <p>Prepare me today with my daily challenges.</p>
//               <img src={assets.message_icon} alt="" />
//             </div>
//              <div className="card">
//               <p>
//                 Let's do chatting for 4 hours daily to improve my writing
//                 skills.
//               </p>
//               <img src={assets.code_icon} alt="" />
//             </div>
//           </div>
//         </>
//       ) : (
//         <div className="result">
//           <div className="result-main-title">
//             <img src={assets.user_icon} className="user-img" alt="" />
//             <p>{recentPrompt && recentPrompt}</p>
//           </div>
//           <div className="result-data">
//             <img src={assets.gemini_icon} alt="" />
//             {loading ? (
//               <div className="loader">
//                 <hr />
//                 <hr />
//                 <hr />
//               </div>
//             ) : (
//               <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
//             )}
//           </div>
//         </div>
//       )}

//       <div className="main-bottom">
//         <div className="search-box">
//           <input
//             type="text"
//             name="chatInput"
//             value={Input}
//             onChange={(e) => setInput(e.target.value)}
//             id="chatInput"
//             onKeyDown={handleKeyDown}
//             placeholder="Enter prompt here."
//           />
//           <div className="main-down-icons">
//             <img
//               src={assets.gallery_icon}
//               alt=""
//               className="icon-gallery"
//             />
//             <div
//               className={`mic-container ${isRecording ? "recording" : ""}`}
//               onClick={startListening}
//             >
//               <img
//                 src={assets.mic_icon}
//                 alt=""
//                 className="icon-mic"
//               />
//               {isRecording && <span className="recording-text">Recording...</span>}
//             </div>
//             {Input && (
//               <img
//                 onClick={() => onSent(Input)}
//                 src={assets.send_icon}
//                 alt=""
//                 className="send-icon"
//               />
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Main;

import React, { useState, useContext, useEffect, useRef } from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
import { Context } from "../../Context/Context";
import { useNavigate } from "react-router-dom";
import run from "../../Config/Gemini";

const Main = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const navigate = useNavigate();
  const recognition = useRef(null);

  // Context values
  const {
    Input,
    setInput,
    onSent,
    loading,
    setloading,
    showResult,
    resultData,
    recentPrompt,
  } = useContext(Context);

  // Authentication check
  const images = [assets.code_icon,assets.compass_icon,assets.history_icon,assets.question_icon]
 
  // Initialize speech recognition
  useEffect(() => {
    if ("webkitSpeechRecognition" in window) {
      recognition.current = new window.webkitSpeechRecognition();
      recognition.current.continuous = false;
      recognition.current.interimResults = false;
      recognition.current.lang = "en-US";

      recognition.current.onstart = () => setIsListening(true);
      recognition.current.onend = () => setIsListening(false);
      recognition.current.onerror = (event) => {
        console.error("Speech recognition error:", event.error);
        setIsListening(false);
      };
      recognition.current.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        onSent(transcript);
      };
    } else {
      alert("Speech recognition is not supported in this browser.");
    }
  }, [run]);

  const startListening = () => {
    if (recognition.current) recognition.current.start();
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && Input.trim() !== "") {
      console.log("User Input:", Input);
      onSent(Input);
      setloading(true);
      setInput(""); // Clear the input field
    }
  };

  return (
    <div className="main">
      <div className="nav">
        <p>ChatAi</p>
      </div>

      {!showResult ? (
        <>
          <div className="main-container">
            <div className="greet">
              <p>
                <span>Hello Learner</span>
              </p>
              <p>How can I help you today?</p>
            </div>
          </div>
          {/* <div className="cards">
            {[
              "Suggest me the best movies in Telugu cinema.",
              "Give me the history and evolution of artificial intelligence.",
              "Prepare me today with my daily challenges.",
              "Let's do chatting for 4 hours daily to improve my writing skills.",
            ].map((text, index) => (
              <div className="card" key={index}>
                <p>{text}</p>
                <img src={images[index]} style={{backgroundColor:"#f0f4f9"}} alt="" />
              </div>
            ))}
          </div> */}
        </>
      ) : (
        <div className="result">
          <div className="result-main-title">
            <img src={assets.user_icon} className="user-img" alt="" />
            <p>{recentPrompt}</p>
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
            value={Input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Enter prompt here."
          />
          <div className="main-down-icons">
            {/* <img src={assets.gallery_icon} alt="" className="icon-gallery" /> */}
            <div
              className={`mic-container ${isListening ? "recording" : ""}`}
              onClick={startListening}
            >
              <img src={assets.mic_icon} alt="" className="icon-mic" />
              {isListening && (
                <span className="recording-text">Recording...</span>
              )}
            </div>
            {Input && (
              <img
                onClick={() => onSent(Input)}
                src={assets.send_icon}
                alt="Send"
                className="send-icon"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
