const API_BASE_URL = "http://localhost:8000/api"

export async function login(username, password) {
    const response = await fetch(`${API_BASE_URL}/login/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({"username": username, "password": password})
    })

    if (!response.ok) throw new Error("Login failed");

    return response.json();
}

export async function register(data) {
    const response = await fetch(`${API_BASE_URL}/register/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })

    if (!response.ok) throw new Error("Account registration failed.");

    return response.json();
}