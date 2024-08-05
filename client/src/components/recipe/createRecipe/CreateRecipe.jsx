import styles from "../../recipe/createRecipe/CreateRecipe.module.css";


export default function CreateRecipe() {
    return (
        <div className={styles.formWrapper}>
            <h2 className={styles.formTitle}>Create Recipe</h2>
            <form className={styles.createRecipeForm}>

                <div className={styles.inputs}>
                    <label htmlFor="email">Title</label>
                    <input type="text" name="email" id="email" placeholder="Delicious recipe" />
                </div>

                <div className={styles.inputs}>
                    <label htmlFor="password">Picture</label>
                    <input type="text" name="password" id="password" placeholder="Image url" />
                </div>


                <div className={styles.inputs}>
                    <label for="time">Cooking Time</label>
                    <input type="text" id="time" name="time" placeholder="enter minutes..." />
                </div>



                <div className={styles.selectors}>
                    <div className={styles.inputs}>
                        <label for="difficulty">Difficulty</label>
                        <select name="difficulty" id="difficulty">
                            <option value="easy">easy</option>
                            <option value="medium">medium</option>
                            <option value="hard">hard</option>
                        </select>
                    </div>


                    <div className={styles.inputs}>
                        <label for="servings">Servings</label>
                        <select name="servings" id="servings">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                        </select>
                    </div>


                    <div className={styles.inputs}>
                        <label for="category">Category</label>
                        <select name="category" id="category">
                            <option value="soup">soup</option>
                            <option value="soup">salad</option>
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
                    <label for="description">Recipe Description</label>
                    <textarea name="description" id="description"
                        maxlength="200" placeholder="enter a brief description..."></textarea>
                </div>

                <div className={styles.inputs}>
                    <label for="ingredients">Igredients</label>
                    <textarea name="ingredients" id="ingredients"
                        maxlength="100" placeholder="each ingredient on a new line..."></textarea>
                </div>

                <div className={styles.inputs}>
                    <label for="steps">Cooking Steps</label>
                    <textarea name="steps" id="steps" maxlength="100"
                        placeholder="each step on a new line..."></textarea>
                </div>




                <div className={styles.buttons}>
                    <button type="submit">Submit</button>
                </div>

            </form>
        </div>
    )
}