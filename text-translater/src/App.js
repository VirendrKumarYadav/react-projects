import React, { useState } from "react";
import './App.css'
import axios from "axios";
import Footer from "./componant/Footer copy/Footer";
import Header from "./componant/Header copy/Header";
import Section from "./componant/Section/Section";

const App = () => {
const [targetText,setTargetText] = useState("")
const [sourceText, setSourceText] = useState("NoText");

  const [source,setSource] = useState("en");
   const [target,setTarget] = useState("id");


  const postApi = async () => {
    const url = "https://text-translator2.p.rapidapi.com/translate";
    const apikey = "a87ea0f1a7mshab123e16f05bfffp18c53ajsnf346c549d3a4";

    const encodedParams = new URLSearchParams();
    encodedParams.set("source_language", source);
    encodedParams.set("target_language", target);
    encodedParams.set("text", sourceText);

    const options = {
      method: "POST",
      url: url,
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "X-RapidAPI-Key": apikey,
        "X-RapidAPI-Host": "text-translator2.p.rapidapi.com",
      },
      data: encodedParams,
    };

    try {
      const response = await axios.request(options);
      setTargetText(response.data.data.translatedText);
    } catch (error) {
      console.error(error);
    }
  };

 const convertToTargetLang = () => {
   postApi();
}


  return (
    <div id="app"  className="h-screen w-screen flex flex-col justify-between">
      <Header />
      <Section sourceText={(e) => (setSourceText(e))} targetText={targetText} setSouceLanuage={(e) => (setSource(e))} setTargetLanuage={(e) => (setTarget(e))} convertToTargetLang={convertToTargetLang} />
      <Footer />
    </div>
  );
}

export default App
