const TOKEN_NAME = "token";
const USER_NAME = "userName";


// 將 token 存到 localStorage
export const setAuthToken = (token) => {
    localStorage.setItem(TOKEN_NAME, token);
};

// 從 localStorage 讀取 token
export const getAuthToken = () => {
    return localStorage.getItem(TOKEN_NAME);
};

// 從 localStorage 移除 token
export const rmAuthToken = () => {
    return localStorage.removeItem(TOKEN_NAME);;
};


// 將 userName 存到 localStorage
export const setUserName = (userName) => {
    localStorage.setItem(USER_NAME, userName);
};

// 從 localStorage 讀取 userName
export const getUserName = () => {
    return localStorage.getItem(USER_NAME);
};


// 從 localStorage 移除 userName
export const rmUserName = () => {
    return localStorage.removeItem(USER_NAME);;
};


