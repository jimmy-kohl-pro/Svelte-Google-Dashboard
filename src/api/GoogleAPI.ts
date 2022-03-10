const ytbURL = "https://www.googleapis.com";

const googleRequest = (path: string, token: string, method = 'GET', params = {}) => {
    return fetch(`${ytbURL}${path}`, {
        method,
        headers: {
            Authorization: `Bearer ${token}`,
        },
        ...params,
    });
};

export const getProfile: (token: string) => Promise<[]> = async (token: string) => {
    return new Promise((resolve, reject) => {
        googleRequest('/auth/userinfo.profile', token)
        .then(res => res.json().then(data => resolve(data.items)));
    });
}