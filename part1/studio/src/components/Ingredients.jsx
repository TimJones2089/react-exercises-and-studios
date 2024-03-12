import styles from './Ingredients.module.css';

export default function RecipeIngredients() {
let topFive = ["Punch down; place on 12in, greased pizza pan.","Pat into a circle.", "Topping: Mix first 5 ingredients and spread over crust.",
"Put a few pepperoni slices on top of sauce.", "Sprinkle with 1/2 the mozzeralla, 1/2 the monterey jack, and 1/2 the parmesan.", "Bake at 400* for 20 minutes or until light brown."];
    return (
        <div>
   <h3>Recipe Ingredients</h3>
   <ul className = {styles.ingredientList}>
      <li>{topFive[0]}</li>
      <li>{topFive[1]}</li>
      <li>{topFive[2]}</li>
      <li>{topFive[3]}</li>
      <li>{topFive[4]}</li>
      <li>{topFive[5]}</li>
   </ul>
</div>
    );
}