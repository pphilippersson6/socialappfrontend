const BASE='https://socialappbackend-44bc0968e05f.herokuapp.com/api';
export const sendGetRequest = async (endpoint) => {
    let headers = {
        'Content-Type': 'application/json',
    }
    const token = localStorage.getItem('token')
    if(token && token !== 'undefined'){
        headers['Authorization'] = `Bearer ${token}`;
    }
    const response = await fetch(BASE + endpoint, {headers: headers});
    const data = await response.json();
    return data;
}

export const sendPostRequest = async (endpoint, data) => {
    const token = localStorage.getItem('token');
    let headers = {
        'Content-Type': 'application/json',
    }
    if(token && token !== 'undefined' && endpoint !== '/user/login/'){
        headers['Authorization'] = `Bearer ${token}`;
    }
    const response = await fetch(BASE + endpoint, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(data),
    })
    const resp = await response.json();
    return resp;
}

export const sendPutRequest = async (endpoint, data) => {
    const response = await fetch(BASE + endpoint, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    const resp = await response.json();
    return resp;
}
