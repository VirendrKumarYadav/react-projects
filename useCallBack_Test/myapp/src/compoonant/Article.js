import {useContext} from 'react'
import { ContextData } from'./Context/ContextData'
const Artical = () => {
  const data = useContext(ContextData);
  const upadteName = () => {  
    data.setUser({
      ...data.user,
      name:"Virendra"
    }
    )
   }
  return (
    <div>
      {data.user.name}
      <h1>Hello This Is Article Page</h1>
      <button onClick={upadteName}>Update Name</button>
    </div>
  );
}

export default Artical
