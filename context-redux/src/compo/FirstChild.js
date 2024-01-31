import React from 'react'
import SecChild from "./SecChild";
import { useDataProvider } from '../App';
import { store} from '../redux/store';

const FirstChild = () => {
  const st = store();
  const child = useDataProvider();
  console.log(st);
  return (
    <div>
      <h1>This is the first child</h1>
      <SecChild />
    </div>
  )
}

export default FirstChild
