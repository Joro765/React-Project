const BASE_URL = "http://localhost:3030/users";


export async function login(email, password) {

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    };

    const response = await fetch(`${BASE_URL}/login`, requestOptions);
    const result = await response.json();

    return result;
}


export async function register(email, password) {

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    };

    const response = await fetch(`${BASE_URL}/register`, requestOptions);
    const result = await response.json();

    return result;
}