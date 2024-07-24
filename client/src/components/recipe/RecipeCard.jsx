export default function RecipeCard({
    img,
    name,
    description
}) {
    return (
        <div className="recipeCard">
            <div className="imageWrapper">
                <img src={img} alt="" />
            </div>
            <div className="recipeInfo">
                <h3>{name}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}