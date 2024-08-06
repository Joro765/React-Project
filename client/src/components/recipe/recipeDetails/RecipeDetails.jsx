import styles from "../recipeDetails/RecipeDetails.module.css";

import * as recipeApi from "../../../api/recipes-api";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../../contexts/authContext";
import { useNavigate, useParams } from "react-router-dom";

export default function RecipeDetails() {

    const navigate = useNavigate();
    const { userId } = useContext(AuthContext);


    const [recipe, setRecipe] = useState({});
    const { recipeId } = useParams();
    const [isOwner, setIsOwner] = useState(false);


    useEffect(() => {
        async function getRecipe() {
            const recipe = await recipeApi.getRecipeById(recipeId);
            setRecipe(recipe);

            if (recipe._ownerId === userId) {
                setIsOwner(true);
            }
        }

        getRecipe();
    }, []);


    async function deleteRecipeHandler() {
        try {
            const result = await recipeApi.removeRecipe(recipeId);
            navigate("/recipes");
        } catch (error) {
            console.log(error.message);
        }
    }



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
            {isOwner &&
                <div className={styles.buttons}>
                    <Link to={`/recipes/${recipeId}/edit`}><button>Edit</button></Link>
                    <button onClick={deleteRecipeHandler}>Delete</button>
                </div>
            }
        </div >
    )
}