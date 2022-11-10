import React from "react";
//import "./style.css";
import FullName from "./Profile/Profilecomponent/Fullname";
import Bio from "./Profile/Profilecomponent/Bio";
import Profession from "./Profile/Profilecomponent/Profession.js";
import HandleName from "./Profile/Profilecomponent/HandleName";


function App() {
  const handleEvent = () => {
    alert(`${this.props.FullName}`);
  };
  return (
    <>
  
      <FullName firstName="HANA" lastName="Rachdi"></FullName>
      <br/>
      <div style={{border:"black double",  marginTop:"20px",}} id="about">
      <Bio FullName="Hana Rachdi" Age="26" Gender="Female" Interests="animals"  />
      </div>
      <br/>
      <div id="profession"><Profession/></div>
      <button onClick={handleEvent}>User</button>

    </>
  );
}
export default App;