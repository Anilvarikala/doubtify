import { createContext, useState } from "react";

export const Context = createContext();
import run from "../Config/Gemini"
const ContextProvider = (props) => {
  const [Input, setInput] = useState("");
  const [recentPrompt, setrecentPrompt] = useState("");
  const [prevPrompt, setprevPrompt] = useState("");
  const [showResult, setshowResult] = useState(false);
  const [loading, setloading] = useState(false);
  const [resultData, setresultData] = useState("");
  const [content, setcontent] = useState({});
  const onSent = async (Input, state) => {
    if (!state) setprevPrompt((prev) => [...prev, Input]);
   
    setloading(true);
    setrecentPrompt(Input);
    const response = await run(Input);
    setInput("");
    // setrecentPrompt("");
    let newResponse = response.split("**");
    let newR = "";
    for (let i = 0; i < newResponse.length; i++) {
      if (i % 2 == 0) newR += newResponse[i];
      else newR += "<b>" + newResponse[i] + "</b>";
    }
    let newRe = "";
    newRe = newR.split("*").join("</br>");

    setresultData(newRe);
    setshowResult(true);
    setloading(false);
  };

  const contextValue = {
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
    prevPrompt,
    setprevPrompt,
  };
  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};
export default ContextProvider;
