import { trackPromise } from 'react-promise-tracker';

const IP = "http://10.19.80.30";
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
