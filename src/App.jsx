import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CardTab from "./cardTab.jsx";
// import MsgHead  from './msgHead.jsx';

function App() {

  return (
    <>
     <h4>Blockbuster Deals on Computer Accessories | Shop Now</h4>
     <CardTab />
      {/* <MsgHead username="rahul" textColor="red" /> */}
     {/* <ProductTab  />  */}
     </>
  )
}

export default App
