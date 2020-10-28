import {useEffect, useRef} from 'react';


export default function useElement(element) {
    const savedElement = useRef();

    useEffect(() => {
        if (element) {
            savedElement.current = element;
        }
    }, [element]);

    return savedElement;
}