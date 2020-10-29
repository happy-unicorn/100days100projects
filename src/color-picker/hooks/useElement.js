import {useEffect, useRef, useState} from 'react';


export default function useElement() {
    const [element, setElement] = useState(null);
    const savedElement = useRef();

    useEffect(() => {
        if (element) {
            savedElement.current = element;
        }
    }, [element]);

    return [element, savedElement, setElement];
}