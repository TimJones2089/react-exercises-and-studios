import styles from './Description.module.css';
import React from 'react';

export function RecipeAuthor() {
let authorLink = "https://www.food.com/user/27643";
let authorPhoto = "https://hackspirit.com/wp-content/uploads/2021/06/Copy-of-Rustic-Female-Teen-Magazine-Cover.jpg" ;
let authorName = "MizzNezz";

return (
    <div className = {styles.recipeAuthorBlock}>
       <img src={authorPhoto} alt = "Reasonable alt text"  className={styles.authorPhoto} />
       <div>
          <h3>{authorName}</h3>
          <a href={authorLink}>Blog name</a> 
       </div>
    </div>
 );
}

class RecipeDescription extends React.Component {
    render() {
        return(
        <div> 
   <div>
      <h1>Homade Pizza</h1>
      <p>Fresh pizza made right in your home!</p>
   </div>
   <RecipeAuthor />
</div>
        );
    }
}

export default RecipeDescription;