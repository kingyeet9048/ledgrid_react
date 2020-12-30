const IP = "http://10.19.80.18";
const port = "3010";
export let response;
export function Fetcher(path) {
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
    );
}
