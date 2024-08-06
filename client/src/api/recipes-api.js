const BASE_URL = "http://localhost:3030/data/recipes";

export async function getAll() {
    const response = await fetch(BASE_URL);
    return response.json();
}


export async function getMoreRecipes(offset) {
    const response = await fetch(`${BASE_URL}?offset=${offset}&pageSize=6`);
    return response.json();
}


export async function getLatest() {
    const response = await fetch(`${BASE_URL}?offset=0&pageSize=6`);
    return response.json();
}


export async function getRecipeById(recipeId) {
    const response = await fetch(`${BASE_URL}/${recipeId}`);
    return response.json();
}


export async function submitRecipe(recipe) {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': `${localStorage.getItem("accessToken")}`
        },
        body: JSON.stringify(recipe)
    };

    const response = await fetch(`${BASE_URL}`, requestOptions);
    const result = await response.json();

    return result;
}


export async function removeRecipe(recipeId) {
    const requestOptions = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': `${localStorage.getItem("accessToken")}`
        }
    };

    const response = await fetch(`${BASE_URL}/${recipeId}`, requestOptions);
    const result = await response.json();

    return result;
}



export async function updateRecipe(recipeId, data) {
    const requestOptions = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': `${localStorage.getItem("accessToken")}`
        },
        body: JSON.stringify(data)
    };

    const response = await fetch(`${BASE_URL}/${recipeId}`, requestOptions);
    const result = await response.json();

    return result;

}