import { configureStore } from '@reduxjs/toolkit'


 const nameList = [
   {
     name: "virendra",
     age: "20 ",
     pass: true,
   },
   {
     name: "raju",
     age: "22 ",
     pass: false,
   },
   {
     name: "Rampati",
     age: "28 ",
     pass: true,
   },
   {
     name: "Vinod",
     age: "30 ",
     pass: true,
   },
 ];

export const store = configureStore({
  reducer: {} ,
});
