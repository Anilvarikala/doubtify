import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Sidebar from "./Components/Sidebar/Sidebar";
import Main from "./Components/Main/Main";
import ContextProvider from "./Context/Context";

const App = () => {
  const navigate = useNavigate();
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        // If no user is signed in, redirect to the signup page
        navigate("/signup");
      }
    });

    return () => unsubscribe(); // Clean up the subscription
  }, [auth, navigate]);

  return (
    <ContextProvider>
      <Sidebar />
      <Main />
    </ContextProvider>
  );
};

export default App;
