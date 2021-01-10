import { trackPromise } from 'react-promise-tracker';

const IP = "http://192.168.1.136";
const port = "3010";
export function Fetcher(path, callback) {
    trackPromise(
        fetch(IP + ":" + port + path, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(
            (result) => {
                callback(null, result);
                return result;
            },
            (error) => {
                callback(error);
                return error;
            }
    ));
}
