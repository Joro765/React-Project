const BASE_URL = "http://localhost:3030/users";


export async function login(email, password) {

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    };

    const response = await fetch(`${BASE_URL}/login`, requestOptions);

    if (!response.ok) {
        throw response.statusText;
    }

    const result = response.json();
    return result;

}




export async function register(email, password) {

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    };

    const response = await fetch(`${BASE_URL}/register`, requestOptions);

    if (!response.ok) {
        throw response.statusText;
    }

    const result = response.json();
    return result;
}




export async function logout(accessToken) {

    const requestOptions = {
        method: 'GET',
        headers: { 'X-Authorization': `${accessToken}` },
    };

    const response = await fetch(`${BASE_URL}/logout`, requestOptions);

    if (response.status === 204) {
        return {};
    }

    return null;
}