import { useState ,useEffect} from "react";
import "./App.css";
import axios from "axios";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import Hero from './component/Hero/Hero'
import Section from "./component/Section/Section";


function App() {
   const [limit, setlimit] = useState(10)
   const [bodyPart, setBodyPart] = useState(
      localStorage.getItem("bodyPart")
      ? JSON.parse(localStorage.getItem("bodyPart"))
      : []
   );
  
  
  const updateLimit = (arg) => {
    setlimit(arg)
  }

  useEffect(() => {
     loadApi();
  }, []);

   const loadApi = async () => {
     let url = `https://exercisedb.p.rapidapi.com/exercises/bodyPartList`;
     let API_Key = "7e6020168emsh5c73595ebad0ec7p13b1bcjsnad48da32f0e6";
     const headers = {
       "content-type": "application/json",
       "X-RapidAPI-Key": API_Key,
       "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
     };

     try {
       const response = await axios.get(url, { headers });
       console.log(response.data);
       setBodyPart(response.data);
       localStorage.setItem("bodyPart",JSON.stringify(response.data));
     } catch (error) {
       console.error(error);
     }
   };

 
  return (
    <div className="App">
      <Header />
      <Hero />
      {
        bodyPart.map((data, index) => {
          return <Section id={data} bodyPartName={data} NoOfData={limit} setData={updateLimit } />;
      })}
      <Footer />
    </div>
  );
}

export default App;
