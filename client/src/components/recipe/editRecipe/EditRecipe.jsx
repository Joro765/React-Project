import { useParams } from "react-router-dom";
import styles from "../../recipe/editRecipe/EditRecipe.module.css";
import { useEffect, useState } from "react";
import useForm from "../../../hooks/useForm";
import { useNavigate } from "react-router-dom";
import { stringConvert, formatArray } from "../../../utils/utils";

import { getRecipeById, updateRecipe } from "../../../api/recipes-api";


const initialValues = {
    name: "",
    img: "",
    time: "",
    difficulty: "easy",
    servings: "1",
    category: "soup",
    description: "",
    ingredients: [],
    steps: []
}

function validate(values) {
    const errors = {};

    if (!values.name) {
        errors.name = "Title is required";
    } else if (values.name.length < 5) {
        errors.name = "Title must be at least 5 characters long";
    }


    if (!values.img) {
        errors.img = "Picture URL is required";
    } else if (!/^https?:\/\//i.test(values.img)) {
        errors.img = "Picture URL must be a valid image URL";
    }


    if (!values.time) {
        errors.time = "Cooking time is required";
    } else if (!/^\d+$/.test(values.time)) {
        errors.time = "Cooking time must be a positive number";
    }


    if (!values.difficulty) {
        errors.difficulty = "Difficulty is required";
    }


    if (!values.servings) {
        errors.servings = "Servings are required";
    }


    if (!values.category) {
        errors.category = "Category is required";
    }


    if (!values.description) {
        errors.description = "Recipe description is required";
    } else if (values.description.length < 10) {
        errors.description = "Recipe description must be at least 10 characters long";
    }


    if (!values.ingredients) {
        errors.ingredients = "Ingredients are required";
    } else if (values.ingredients.length < 10) {
        errors.ingredients = "Ingredients must be at least 10 characters long";
    }


    if (!values.steps) {
        errors.steps = "Cooking steps are required";
    } else if (values.steps.length < 10) {
        errors.steps = "Cooking steps must be at least 10 characters long";
    }

    return errors;
};







export default function EditRecipe() {
    const navigate = useNavigate();
    const { recipeId } = useParams();
    const [recipe, setRecipe] = useState(initialValues);

    useEffect(() => {
        async function getRecipe() {
            const recipe = await getRecipeById(recipeId);
            recipe.ingredients = formatArray(recipe.ingredients);
            recipe.steps = formatArray(recipe.steps);
            setRecipe(recipe);
            setValues(recipe);
        }

        getRecipe();
    }, []);





    const { values, onChange, onSubmit, setValues, errors } = useForm(initialValues, submitRecipeHandler, validate);




    async function submitRecipeHandler(recipeData) {

        const isConfirmed = confirm("Are you sure you want to edit this recipe?");

        try {
            if (isConfirmed) {
                recipeData.steps = stringConvert(recipeData.steps);
                recipeData.ingredients = stringConvert(recipeData.ingredients);
                const result = await updateRecipe(recipeId, recipeData);
                navigate(`/recipes/${result._id}`);
            }
        } catch (error) {
            console.log(error.message);
        }
    }



    return (
        <div className={styles.formWrapper}>
            <h2 className={styles.formTitle}>Edit Recipe</h2>
            <form onSubmit={onSubmit} className={styles.editRecipeForm}>

                <div className={styles.inputs}>
                    <label htmlFor="name">Title</label>
                    <input type="text" name="name" id="name" placeholder="Delicious recipe" onChange={onChange} value={values.name} />
                    {errors.name && <p className={styles.error}>{errors.name}</p>}
                </div>

                <div className={styles.inputs}>
                    <label htmlFor="img">Picture</label>
                    <input type="text" name="img" id="img" placeholder="Image url" onChange={onChange} value={values.img} />
                    {errors.img && <p className={styles.error}>{errors.img}</p>}
                </div>


                <div className={styles.inputs}>
                    <label htmlFor="time">Cooking Time</label>
                    <input type="text" id="time" name="time" placeholder="enter minutes..." onChange={onChange} value={values.time} />
                    {errors.time && <p className={styles.error}>{errors.time}</p>}
                </div>



                <div className={styles.selectors}>
                    <div className={styles.inputs}>
                        <label htmlFor="difficulty">Difficulty</label>
                        <select name="difficulty" id="difficulty" onChange={onChange} value={values.difficulty}>
                            <option value="easy">easy</option>
                            <option value="medium">medium</option>
                            <option value="hard">hard</option>
                        </select>
                        {errors.difficulty && <p className={styles.error}>{errors.difficulty}</p>}
                    </div>


                    <div className={styles.inputs}>
                        <label htmlFor="servings">Servings</label>
                        <select name="servings" id="servings" onChange={onChange} value={values.servings}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                        </select>
                        {errors.servings && <p className={styles.error}>{errors.servings}</p>}
                    </div>


                    <div className={styles.inputs}>
                        <label htmlFor="category">Category</label>
                        <select name="category" id="category" onChange={onChange} value={values.category
                        }>
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
                        {errors.category && <p className={styles.error}>{errors.category}</p>}
                    </div>
                </div>


                <div className={styles.inputs}>
                    <label htmlFor="description">Recipe Description</label>
                    <textarea name="description" id="description"
                        placeholder="enter a brief description..." onChange={onChange} value={values.description}></textarea>
                    {errors.description && <p className={styles.error}>{errors.description}</p>}
                </div>

                <div className={styles.inputs}>
                    <label htmlFor="ingredients">Ingredients</label>
                    <textarea name="ingredients" id="ingredients"
                        placeholder="each ingredient on a new line..." onChange={onChange} value={values.ingredients}></textarea>
                    {errors.ingredients && <p className={styles.error}>{errors.ingredients}</p>}
                </div>

                <div className={styles.inputs}>
                    <label htmlFor="steps">Cooking Steps</label>
                    <textarea name="steps" id="steps"
                        placeholder="each step on a new line..." onChange={onChange} value={values.steps}></textarea>
                    {errors.steps && <p className={styles.error}>{errors.steps}</p>}
                </div>




                <div className={styles.buttons}>
                    <button type="submit">Submit</button>
                </div>

            </form>
        </div>
    )
}