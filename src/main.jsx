// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import "./index.css";
// import App from "./App.jsx";
// import Login from "./Components/Login.jsx";
// import Signup from "./Components/Signup.jsx";
// import PrivateRoute from "./Components/PrivateRoute.jsx";  // Import the PrivateRoute component

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <Router>
//       <Routes>
//       {!isAuthenticated&& (
//           <>
//             <Route path="/login" element={<Login />} />
//             <Route path="/signup" element={<Signup />} />
//           </>
//         )}

//         {/* Private Route */}
//         <Route
//           path="/"
//           element={
//             <PrivateRoute>
//               <App />
//             </PrivateRoute>
//           }
//         />
//       </Routes>
//     </Router>
//   </StrictMode>
// );

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom"; // Import Navigate for redirection
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        {/* Public Routes */}
        {/* If the user is authenticated, redirect them to the main page */}
        {/* {!isAuthenticated && (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </>
        )} */}

        {/* If the user is authenticated, don't let them access login/signup */}
        {/* {isAuthenticated && (
          <>
            <Route path="/login" element={<Navigate to="/" replace />} />
            <Route path="/signup" element={<Navigate to="/" replace />} />
          </>
        )} */}

        {/* Private Route */}
        <Route path="/" element={<App />} />
      </Routes>
    </Router>
  </StrictMode>
);

// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Login from "./Components/Login";
// import Signup from "./Components/Signup";
// import Main from "./Components/Main/Main";
// import PrivateRoute from "./Components/PrivateRoute";
// import ContextProvider from "./Context/Context";
// import { useNavigate } from "react-router-dom";

// const App = () => {
//   const isAuthenticated = localStorage.getItem("isAuthenticated");
//   const navigate = useNavigate();

//   return (
//     <Router>
//       <Routes>
//         {/* Public Routes */}
//         {!isAuthenticated && (
//           <>
//             <Route path="/login" element={<Login />} />
//             <Route path="/signup" element={<Signup />} />
//           </>
//         )}

//         {/* Private Route */}
//         <Route
//           path="/"
//           element={
//             <ContextProvider>
//               <PrivateRoute>
//                 <Main />
//               </PrivateRoute>
//             </ContextProvider>
//           }
//         />
//       </Routes>
//     </Router>
//   );
// };

// export default App;
