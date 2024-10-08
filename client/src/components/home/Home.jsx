import styles from "../home/Home.module.css";

import { useState, useEffect } from "react";
import * as recipeApi from "../../api/recipes-api";
import RecipeCard from "../recipe/recipeCard/RecipeCard";
import Spinner from "../common/spinner/Spinner";


export default function Home() {
    const [recipes, setRecipes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        setIsLoading(true);

        async function loadRecipes() {
            const result = await recipeApi.getLatest();

            setRecipes(result);
            setIsLoading(false);
        }

        loadRecipes();
    }, []);


    return (
        <div className={styles.homeSection}>
            <div className={styles.heading}>
                <h2>Newest Recipes</h2>
                <p>Unleash your inner chef with our latest recipes! Each one is designed to spark creativity and bring fresh flavors to your meals.</p>
            </div>

            {isLoading
                ? <Spinner />
                : (
                    <div className={styles.recipesList}>
                        {recipes.map((recipe) => <RecipeCard key={recipe._id} {...recipe} />)}
                    </div>)
            }
        </div>
    )
}