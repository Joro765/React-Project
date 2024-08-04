import styles from "../allRecipes/Recipes.module.css";

import Spinner from "../../common/spinner/Spinner";

import { useState, useEffect } from "react";
import * as recipeApi from "../../../api/recipes-api";
import RecipeCard from "../../recipe/recipeCard/RecipeCard";



export default function Recipes() {

    const [recipes, setRecipes] = useState([]);
    const [offset, setOffset] = useState(0);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        setIsLoading(true);

        async function loadRecipes() {
            const result = await recipeApi.getMoreRecipes(offset);
            setRecipes(result);
            setOffset(prevOffset => prevOffset + 6);
            setIsLoading(false);
        }

        loadRecipes();
    }, []);



    async function loadMore() {
        setIsLoading(true);
        const result = await recipeApi.getMoreRecipes(offset);
        setRecipes((prevRecipes) => [...prevRecipes, ...result]);
        setOffset(prevOffset => prevOffset + 6);
        setIsLoading(false);
    }







    return (
        <div className={styles.recipesSection}>
            <div className={styles.banner}>
                <h1>All Recipes</h1>
            </div>
            <div className={styles.slogan}>
                <p>Satisfy every craving with our diverse collection of recipes where every dish tells a delicious story.</p>
            </div>
            <div className={styles.recipesList}>
                {isLoading
                    ? <Spinner />
                    : (
                        <div className={styles.recipesList}>
                            {recipes.map((recipe) => <RecipeCard key={recipe._id} {...recipe} />)}
                        </div>)
                }
            </div>
            <div className={styles.buttons}>
                <button onClick={loadMore}>Show more</button>
            </div>
        </div>

    )
}


