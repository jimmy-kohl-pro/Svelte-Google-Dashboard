const ytbURL = "https://www.googleapis.com/youtube/v3";

const ytbRequest = (path: string, method = 'GET', params = {}) => {
    return fetch(`${ytbURL}${path}`, {
        method,
        headers: {
            // Authorization: `Bearer ${token}`,
        },
        ...params,
    });
};

export const getPlaylists = async (token: string) => {
    return new Promise((resolve, reject) => {
        ytbRequest("/playlists")
        .then(res => res.json().then(data => resolve(data.items)));
    });
}

export const searchVideos: (query: string) => Promise<[]> = async (query: string) => {
    return new Promise((resolve, reject) => {
        ytbRequest(`/search?part=snippet&maxResults=20&q=${query}&type=video&key=AIzaSyDzINVzoMjCwL7MfcAw6GWQw8S1iETiF-A`)
        .then(res => res.json().then(data => resolve(data.items)));
    });
}