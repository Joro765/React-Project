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
        }

        getRecipe();
    })

    return (

        <div className={styles.detailsSection}>
            <div className={styles.recipeBanner} style={{ backgroundImage: `url(${recipe.img})` }}>
                <h1>{recipe.name}</h1>
            </div>
        </div>
    )
}