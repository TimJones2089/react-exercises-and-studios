import recipedata from "./recipe.json"
import "./styling.css"
function RecipeImage() {
  const image = recipedata.map((data) => (
    <div key={data.name}>
      <img key={data.recipeImage} src={data.recipeImage} className="recipeImage"/>
        </div>
   ))
   return image;   
 }
 
 export default RecipeImage;
 
 //import json file for the data
 //apply css for className recipeImage
 