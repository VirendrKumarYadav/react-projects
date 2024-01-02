import React, { useState, useEffect } from "react";
import axios from "axios";

const Section = (props) => {
  const [imagesdata, setImages] = useState(
    localStorage.getItem("imagesdata")
      ? JSON.parse(localStorage.getItem("imagesdata"))
      : []
  );

  const loadMoreData = () => {
  props.setData(props.NoOfData+10);
}


  useEffect(() => {
    loadApi(props.bodyPartName);
  }, []);

  const loadApi = async (type) => {
    let url = `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${type}?limit=${props.NoOfData}`;
    let API_Key = "7e6020168emsh5c73595ebad0ec7p13b1bcjsnad48da32f0e6";
    const headers = {
      "content-type": "application/json",
      "X-RapidAPI-Key": API_Key,
      "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    };
   

    try {
      const response = await axios.get(url, { headers });
      setImages(response.data);
      localStorage.setItem("imagesdata", JSON.stringify(response.data));
    } catch (error) {
      console.error(error);
    }
  };

  let upCase = "";
  return (
    <section id={props.id} className="mx-2 my-8">
      <h1 className=" mx-20 my-6 text-blue-300 bg-pink-700 font-mono font-bold text-lg text-center">
        {props.id.toUpperCase()}
      </h1>
      <div className=" flex flex-wrap  justify-center gap-7">
        {imagesdata.map((obj) => {
          return (
            <div className="w-80 shadow-lg shadow-indigo-500/40 flex flex-col rounded-lg">
              <h1>{obj.name}</h1>
              <div>
                <img src={obj.gifUrl} />
                <p>{obj.instructions[0]}</p>
              </div>
            </div>
          );
        })}
      </div>
      <button onClick={loadMoreData} className="bg-blue-600 text-white font-bold text-start my-9 p-3 rounded-md">Load More...</button>
    </section>
  );
};

export default Section;
