
import './App.css'
import * as React from 'react';
import Appbar from "./Appbar";
import Heading from "./heading";
import RecipeReviewCard from "./card"
import MultiActionAreaCard from "./card1"
 
function App(){
   
  
  return <div>
    <Appbar/>
    <div className='card'>
    <RecipeReviewCard/>
    <RecipeReviewCard/>
    <RecipeReviewCard/>
    </div>
    <div>
      <MultiActionAreaCard/>
      <MultiActionAreaCard/>
      <MultiActionAreaCard/>

    </div>
  </div>

}

export default App

