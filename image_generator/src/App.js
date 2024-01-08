import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [imageName, setImageName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const url =
    "https://api-inference.huggingface.co/models/prompthero/openjourney-v4";
  const api_key = "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";

  const fetchImage = async () => {
    if(imageName)
    axios
      .post(
        url,
        {
          inputs: imageName,
        },
        {
          headers: {
            Authorization: `Bearer ${api_key}`,
          },
          responseType: "blob",
        }
      )
      .then((response) => {
        const imageUrl = URL.createObjectURL(response.data);
        setImageUrl(imageUrl);
      })
      .catch((error) => {
        console.error("Error generating image:", error);
      });
  };
  useEffect(() => {
    fetchImage();
  },[imageName])

  return (
    <div className="flex py-5 justify-center items-center bg-gray-200 flex-col gap-10">
      <div className="flex flex-col py-11 border-2 px-11 gap-3 bg-white shadow-xl rounded-md">
        <label className="font-serif text-2xl ">Image Generation App</label>
        <input
          placeholder="Enter Text..."
          className="w-80 border-2 py-2 px-3"
          onChange={(e) => setImageName(e.target.value)}
        ></input>
      </div>
      <div>
      
        <img src={imageUrl} className=" rounded-xl"></img>
      </div>
    </div>
  );
}

export default App;
