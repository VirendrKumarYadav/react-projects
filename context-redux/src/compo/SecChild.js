import React from 'react'
import { useDataProvider } from "../App";



const SecChild = () => {
    const child = useDataProvider();
  console.log(child);
  
  

  return (
    <div>
      <h2>This is the secound child</h2>
      {child.map((ch) => (
        <ul>
          <li>{ch.name}</li>
          <li>{ch.age}</li>
          <li>{ch.pass?"Agress":"disagree"}</li>
     
        </ul>
      ))}
    </div>
  );
}

export default SecChild
