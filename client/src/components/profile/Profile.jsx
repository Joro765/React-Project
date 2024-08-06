import { useContext } from "react";
import AuthContext from "../../contexts/authContext";
import { useState, useEffect } from 'react';
import { getUserRecipes } from "../../api/recipes-api";

import RecipeCard from "../recipe/recipeCard/RecipeCard";


import styles from './Profile.module.css';


export default function Profile() {
    const [recipes, setRecipes] = useState([]);
    const { userId } = useContext(AuthContext);


    useEffect(() => {

        async function loadRecipes() {
            const result = await getUserRecipes(userId);
            setRecipes(result);
        }

        loadRecipes();
    }, []);



    return (
        <div className={styles.profileSection}>
            <div className={styles.profileWrapper}>
                <div className={styles.info}>
                    <div className={styles.imageWrapper}>
                        <img src="images/user.png" alt="" />
                    </div>
                    <h3>Welcome <span className={styles.userEmail}>jorogeorgiev765@gmail.com</span></h3>
                </div>
                <h4>Manage your recipes</h4>
                <div className={styles.recipesList}>
                    {recipes.length > 0 ? (
                        <div className={styles.recipesList}>
                            {recipes.map((recipe) => (
                                <RecipeCard key={recipe._id} {...recipe} />
                            ))}
                        </div>
                    ) : (
                        <p className={styles.noRecipesMessage}>You haven't added any recipes yet!</p>
                    )}
                </div>
            </div>
        </div>
    )
}


