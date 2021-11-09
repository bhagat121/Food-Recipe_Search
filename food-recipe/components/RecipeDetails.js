import React from "react";
import {v4 as uuidv4} from "uuid";

const RecipeDetails = ({ingredients}) =>{
   return ingredients.map(ingredients=> {
       return (
           <ul key={uuidv4()}
           className="ingredients-list">
               <li className="ingredients-text">
                   {ingredients.text}
               </li>
               <li className="ingredients-weight">
                   {ingredients.weight}
               </li>
           </ul>
       );
   });
}

export default RecipeDetails;