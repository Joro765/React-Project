import styles from "../recipeDetails/RecipeDetails.module.css";

import * as recipeApi from "../../../api/recipes-api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function RecipeDetails() {
    const [recipe, setRecipe] = useState({});
    const { recipeId } = useParams();


    useEffect(() => {
        async function getRecipe() {
            const recipe = await recipeApi.getRecipeById(recipeId);
            setRecipe(recipe);
            console.log(recipe);
        }

        getRecipe();
    }, []);

    return (

        <div className={styles.detailsSection}>
            <div className={styles.recipeBanner} style={{ backgroundImage: `url(${recipe.img})` }}>
                <h1>{recipe.name}</h1>
            </div>
            <div className={styles.descriptionWrapper}>
                <div className={styles.description}>
                    <h2>Description</h2>
                    <p>{recipe.description}</p>
                </div>
                <div className={styles.recipeInfo}>
                    <p>Category <i>{recipe.category}</i></p>
                    <p>Total Time <i>{recipe.time}</i></p>
                    <p>Difficulty <i>{recipe.difficulty}</i></p>
                    <p>Servings <i>{recipe.servings}</i></p>
                </div>
            </div>
            <div className={styles.instructionsWrapper}>
                <div className={styles.ingredients}>
                    <h3>Ingredients</h3>
                    <p>First of all, check if you have all the necessary ingredients for this recipe. Pay attention to the quantities!</p>
                    <ul>
                        {recipe.ingredients?.map((ingredient) => <li key={ingredient}>{ingredient}</li>)}
                    </ul>
                </div>
                <div className={styles.steps}>
                    <h3>The Steps</h3>
                    <p>Next, follow the steps to finalize your dish and finally be able to enjoy it!</p>
                    <ul>
                        {recipe.steps?.map((step) => <li key={step}>{step}</li>)}
                    </ul>
                </div>
            </div>
        </div>
    )
}