import * as React from "react";
import { ethers } from "ethers";
import './App.css';

export default function App() {

 const checkIfWalletIsConnect = () => {
   const {ethereum} = window;
   if(!ethereum){
     console.log("Make sure you have metamask!")
     return;
   } else {
     console.log("We have the ethereum object")
   }
 }
    
  useEffect(() => {
    checkIfWalletIsConnect()
  }, [])
  
  return (
    <div className="mainContainer">

      <div className="dataContainer">
        <div className="header">
        👋 Hey there!
        </div>

        <div className="bio">
        Hi I'm Tatiana and I'm looking to get going with understanding Web3!
        </div>

        <button className="waveButton" onClick={wave}>
          Wave at Me
        </button>
      </div>
    </div>
  );
}
