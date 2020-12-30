import React from 'react';
const IP = "http://10.19.80.18";
const port = "3010";
const [response, setResponse] = React.useState();
const Fetcher = (path, method) => {
    fetch(IP + ":" + port + path, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .then(
        (result) => {
            console.log(result);
            setResponse(result);
            return result;
        },
        (error) => {
            console.log(error);
            setResponse(error);
            return error;
        }
    );
}

export default Fetcher;