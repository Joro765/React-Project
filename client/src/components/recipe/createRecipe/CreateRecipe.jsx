import { useNavigate } from "react-router-dom";
import { stringConvert } from "../../../utils/utils";
import useForm from "../../../hooks/useForm";

import styles from "../../recipe/createRecipe/CreateRecipe.module.css";
import { submitRecipe } from "../../../api/recipes-api";



export default function CreateRecipe() {
    const navigate = useNavigate();

    const { values, onChange, onSubmit } = useForm(
        {
            name: "",
            img: "",
            time: "",
            difficulty: "easy",
            servings: "1",
            category: "soup",
            description: "",
            ingredients: [],
            steps: []
        }, submitRecipeHandler);




    async function submitRecipeHandler(recipeData) {
        recipeData.steps = stringConvert(recipeData.steps);
        recipeData.ingredients = stringConvert(recipeData.ingredients);

        try {
            const result = await submitRecipe(recipeData);
            navigate(`/recipes/${result._id}`);
        } catch (error) {
            console.log(error.message);
        }
    }



    return (
        <div className={styles.formWrapper}>
            <h2 className={styles.formTitle}>Create Recipe</h2>
            <form onSubmit={onSubmit} className={styles.createRecipeForm}>

                <div className={styles.inputs}>
                    <label htmlFor="name">Title</label>
                    <input type="text" name="name" id="name" placeholder="Delicious recipe" values={values.name} onChange={onChange} />
                </div>

                <div className={styles.inputs}>
                    <label htmlFor="img">Picture</label>
                    <input type="text" name="img" id="img" placeholder="Image url" values={values.img} onChange={onChange} />
                </div>


                <div className={styles.inputs}>
                    <label htmlFor="time">Cooking Time</label>
                    <input type="text" id="time" name="time" placeholder="enter minutes..." values={values.time} onChange={onChange} />
                </div>



                <div className={styles.selectors}>
                    <div className={styles.inputs}>
                        <label htmlFor="difficulty">Difficulty</label>
                        <select name="difficulty" id="difficulty" values={values.difficulty} onChange={onChange}>
                            <option value="easy">easy</option>
                            <option value="medium">medium</option>
                            <option value="hard">hard</option>
                        </select>
                    </div>


                    <div className={styles.inputs}>
                        <label htmlFor="servings">Servings</label>
                        <select name="servings" id="servings" values={values.servings} onChange={onChange}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                        </select>
                    </div>


                    <div className={styles.inputs}>
                        <label htmlFor="category">Category</label>
                        <select name="category" id="category" values={values.category} onChange={onChange}>
                            <option value="soup">soup</option>
                            <option value="salad">salad</option>
                            <option value="side">side</option>
                            <option value="dessert">dessert</option>
                            <option value="seafood">seafood</option>
                            <option value="pasta">pasta</option>
                            <option value="sandwich">sandwich</option>
                            <option value="beef">beef</option>
                            <option value="pork">pork</option>
                        </select>
                    </div>
                </div>


                <div className={styles.inputs}>
                    <label htmlFor="description">Recipe Description</label>
                    <textarea name="description" id="description" values={values.description} onChange={onChange}
                        placeholder="enter a brief description..."></textarea>
                </div>

                <div className={styles.inputs}>
                    <label htmlFor="ingredients">Ingredients</label>
                    <textarea name="ingredients" id="ingredients" values={values.ingredients} onChange={onChange}
                        placeholder="each ingredient on a new line..."></textarea>
                </div>

                <div className={styles.inputs}>
                    <label htmlFor="steps">Cooking Steps</label>
                    <textarea name="steps" id="steps" values={values.steps} onChange={onChange}
                        placeholder="each step on a new line..."></textarea>
                </div>




                <div className={styles.buttons}>
                    <button type="submit">Submit</button>
                </div>

            </form>
        </div>
    )
}