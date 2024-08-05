import styles from "../allRecipes/Recipes.module.css";

import Spinner from "../../common/spinner/Spinner";

import { useState, useEffect } from "react";
import { getMoreRecipes } from "../../../api/recipes-api";
import RecipeCard from "../../recipe/recipeCard/RecipeCard";



export default function Recipes() {

    const [recipes, setRecipes] = useState([]);
    const [offset, setOffset] = useState(0);
    const [hasMore, setHasMore] = useState(true);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchItems(offset);
    }, []);




    const fetchItems = async (offset) => {
        setLoading(true);
        try {
            const data = await getMoreRecipes(offset);

            if (data.length === 0) {
                setHasMore(false);
            } else {
                setRecipes((prevItems) => [...prevItems, ...data]);
                setOffset(offset + 6);
            }
        } catch (error) {
            console.error('Error fetching items:', error);
        } finally {
            setLoading(false);
        }
    };



    const loadMore = () => {
        if (hasMore && !loading) {
            fetchItems(offset);
        }
    };




    return (
        <div className={styles.recipesSection}>
            <div className={styles.banner}>
                <h1>All Recipes</h1>
            </div>
            <div className={styles.slogan}>
                <p>Satisfy every craving with our diverse collection of recipes where every dish tells a delicious story.</p>
            </div>
            <div className={styles.recipesList}>
                {loading
                    ? <Spinner />
                    : (
                        <div className={styles.recipesList}>
                            {recipes.map((recipe) => <RecipeCard key={recipe._id} {...recipe} />)}
                        </div>)
                }
            </div>
            <div className={styles.buttons}>
                {hasMore ? (
                    <button onClick={loadMore} disabled={loading}>Load More</button>
                ) : (
                    <p>No more recipes to load</p>
                )}
            </div>
        </div>

    )


}
