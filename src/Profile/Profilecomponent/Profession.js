import React, { Component } from 'react';
import { FaUserGraduate } from "react-icons/fa";

export const Profession = () => {
  return (
    <div>Profession</div>
  )
}


    class Profession extends Component {
        render() { 
  return (
    <div class="card bg-dark text-white">
  <img src="./images/working.jpg" class="card-img" alt="..."/>
  
  <div class="card-img-overlay">
    <FaUserGraduate />
    <h5 class="card-title"><b>Profession</b></h5>
    <p class="card-text">I am a student at GO My Code </p>
  
  
    <p class="card-text"><b>SKIILS</b> <br/> -HTML/CSS <br/> -JAVASCRIPT <br/> -REACT <br/> -Visual Studio <br/></p>
    
  </div>
</div>

  );
}}
export default Profession;