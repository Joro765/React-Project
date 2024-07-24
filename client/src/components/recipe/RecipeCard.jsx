import styles from "../recipe/Recipe.module.css";


export default function RecipeCard({
    img,
    name,
    description
}) {
    return (
        <div className={styles.recipeCard}>
            <div className={styles.imageWrapper}>
                <img src={img} alt="" />
            </div>
            <div className={styles.recipeInfo}>
                <h3>{name}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}