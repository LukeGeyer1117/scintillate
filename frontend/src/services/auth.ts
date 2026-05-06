const API_BASE_URL = "http://localhost:8000/api";

export async function login(username: string, password: string) {
    const response = await fetch(`${API_BASE_URL}/login/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({"username": username, "password": password})
    })

    if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        throw new Error(
            `Login not successful: ${JSON.stringify(errorData)}`
        );
    }

    return await response.json();
}

export async function register(email: string, username: string, password: string, first_name: string, last_name: string) {
    const response = await fetch(`${API_BASE_URL}/register/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({"username": username, "password": password, "email": email, "first_name": first_name, "last_name": last_name})
    })

    const data = await response.json();

    if (!response.ok) {
        // Extract the error message
        const message = 
        data?.error ||
        data?.detail || // Fallback
        "Registration failed"
        
        throw new Error(message);
    }

    return data;
}