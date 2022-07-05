import { getAuthToken } from "./utils";


const BASE_URL = "https://student-json-api.lidemy.me";

// 登入
export const login = async (username, password) => {
    const res = await fetch(`${BASE_URL}/login`, {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify({
            username,
            password,
        }),
    });
    return await res.json();
};


// 身分驗證
export const getMe = async () => {
    // 從 localStorage 讀取 token
    const token = getAuthToken();
    const res = await fetch(`${BASE_URL}/me`, {
        headers: {
            authorization: `Bearer ${token}`,
        },
    });
    return await res.json();
};
