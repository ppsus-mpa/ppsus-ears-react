import React, { useEffect, useState } from 'react';

const AsyncRequest = ({ children, defaultValue, loaderChildren, onError, requestFunction }) => {
    const [values, setValues] = useState(defaultValue !== undefined? defaultValue : []);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if(requestFunction) {
            if(!loading) {
                setLoading(true);
                requestFunction().then(response => {
                    if(response && response.isSuccess) {
                        setValues(response.body);
                    }else {
                        if (onError) {
                            onError(response);
                        }
                    }
                    setLoading(false);
                });
            }
        }
    }, [requestFunction]);

    if(loaderChildren && loading){
        return loaderChildren;
    }

    return children(values);
};

export default AsyncRequest;
