import { trackPromise } from 'react-promise-tracker';

const IP = "http://192.168.1.236";
const port = "3010";
export let response = null;
export function Fetcher(path) {
    trackPromise(
        fetch(IP + ":" + port + path, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(
            (result) => {
                console.log(result);
                response = result;
                return result;
            },
            (error) => {
                console.log(error);
                response = error;
                return error;
            }
    ));
}
