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
            <div className={styles.descriptionWrapper}>
                <div className={styles.description}>
                    <h2>Description</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure totam veniam odit minus. Maiores consectetur consequatur repellat dolor asperiores numquam in nisi iure aperiam unde blanditiis quia harum, pariatur dolores.
                        Dolorum dolor, molestias aperiam itaque ad fugit porro! Ratione necessitatibus quasi facilis a nemo voluptate excepturi qui iure aliquid, vitae vero illo. Suscipit error aspernatur quasi, necessitatibus exercitationem tenetur harum.
                        Doloremque, autem. Obcaecati deserunt, iure consequatur similique laboriosam sequi ratione officiis facilis porro aliquid cum et labore temporibus sed voluptas perspiciatis. Quae officia fugit quibusdam illum, earum inventore possimus ut.</p>
                </div>
                <div className={styles.recipeInfo}>
                    <p>Category <i>{recipe.category}</i></p>
                    <p>Total Time <i>{recipe.time}</i></p>
                    <p>Difficulty <i>{recipe.difficulty}</i></p>
                    <p>Servings <i>${recipe.servings}</i></p>
                </div>
            </div>
        </div>
    )
}