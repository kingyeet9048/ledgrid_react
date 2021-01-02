import React from 'react';
import Loader from 'react-loader-spinner';
import { usePromiseTracker } from 'react-promise-tracker';


function Loading() {
    const { promiseInProgress } = usePromiseTracker();

    return promiseInProgress && 
        <div>
            <Loader type="ThreeDots" color="white" height="100" width="100" />
        </div>
}
export default Loading;