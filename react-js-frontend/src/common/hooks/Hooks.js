import {useCallback, useState} from "react";

// export const useFetch = (url, username, password) => {
//     const [data, setData] = useState({})
//
//     useEffect(() => {
//         fetchData(url, username, password).then(d => setData(d));
//     }, [url, username, password]);
//     return [data]
// }

export const useFetch = () => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = useCallback(async (url, username, password) => {
        setLoading(true);
        setError(null);
        const headers = {
            'Content-Type': 'application/json',
            Authorization: (!username&&!password)? null:`Basic ${btoa(`${username}:${password}`)}`
        };

        const response = await fetch(url, {headers});
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        const responseJson = await response.json();
        setData(responseJson);
        setLoading(false);
    }, []);

    return [data, loading, error, fetchData];
};

export const fetchData = async (url, username, password) => {
    const headers = {
        'Content-Type': 'application/json',
        Authorization: `Basic ${btoa(`${username}:${password}`)}`
    };

    const response = await fetch(url, {headers});
    return await response.json();
};