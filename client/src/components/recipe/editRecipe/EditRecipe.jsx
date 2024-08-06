import { useParams } from "react-router-dom";
import styles from "../../recipe/editRecipe/EditRecipe.module.css";
import { useState, useEffect } from "react";
import useForm from "../../../hooks/useForm";
import { useNavigate } from "react-router-dom";
import { stringConvert } from "../../../utils/utils";

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


export default function EditRecipe() {
    const navigate = useNavigate();
    const { recipeId } = useParams();

    useEffect(() => {
        async function getRecipe() {
            const recipe = await getRecipeById(recipeId);
            setValues(recipe);
        }

        getRecipe();
    }, []);


    const { values, onChange, onSubmit, setValues } = useForm(initialValues, submitRecipeHandler);


    async function submitRecipeHandler(recipeData) {
        recipeData.steps = stringConvert(recipeData.steps);
        recipeData.ingredients = stringConvert(recipeData.ingredients);

        const isConfirmed = confirm("Are you sure you want to edit this recipe?");

        try {
            if (isConfirmed) {
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
                </div>

                <div className={styles.inputs}>
                    <label htmlFor="img">Picture</label>
                    <input type="text" name="img" id="img" placeholder="Image url" onChange={onChange} value={values.img} />
                </div>


                <div className={styles.inputs}>
                    <label htmlFor="time">Cooking Time</label>
                    <input type="text" id="time" name="time" placeholder="enter minutes..." onChange={onChange} value={values.time} />
                </div>



                <div className={styles.selectors}>
                    <div className={styles.inputs}>
                        <label htmlFor="difficulty">Difficulty</label>
                        <select name="difficulty" id="difficulty" onChange={onChange} value={values.difficulty}>
                            <option value="easy">easy</option>
                            <option value="medium">medium</option>
                            <option value="hard">hard</option>
                        </select>
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
                    </div>
                </div>


                <div className={styles.inputs}>
                    <label htmlFor="description">Recipe Description</label>
                    <textarea name="description" id="description"
                        placeholder="enter a brief description..." onChange={onChange} value={values.description}></textarea>
                </div>

                <div className={styles.inputs}>
                    <label htmlFor="ingredients">Ingredients</label>
                    <textarea name="ingredients" id="ingredients"
                        placeholder="each ingredient on a new line..." onChange={onChange} value={values.ingredients}></textarea>
                </div>

                <div className={styles.inputs}>
                    <label htmlFor="steps">Cooking Steps</label>
                    <textarea name="steps" id="steps"
                        placeholder="each step on a new line..." onChange={onChange} value={values.steps}></textarea>
                </div>




                <div className={styles.buttons}>
                    <button type="submit">Submit</button>
                </div>

            </form>
        </div>
    )
}