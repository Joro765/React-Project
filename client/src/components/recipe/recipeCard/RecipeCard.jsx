import styles from "../recipeCard/RecipeCard.module.css";

import { Link } from "react-router-dom";


export default function RecipeCard({
    _id,
    img,
    name,
    description
}) {
    return (
        <Link to={`/recipes/${_id}`}>
            <div className={styles.recipeCard}>
                <div className={styles.imageWrapper}>
                    <img src={img} alt="" />
                </div>
                <div className={styles.recipeInfo}>
                    <h3>{name}</h3>
                    <p>{description}</p>
                </div>
            </div>
        </Link>
    )
}