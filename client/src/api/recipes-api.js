const BASE_URL = "http://localhost:3030/data/recipes";

export async function getAll() {
    const response = await fetch(BASE_URL);
    return response.json();
}


export async function getLatest() {
    const response = await fetch(`${BASE_URL}?offset=0&pageSize=6`);
    return response.json();
}