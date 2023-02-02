
import {
    useEffect,
    useState,
} from 'react'
const useCounter = (num, onScreen) => {
    const [number] = useState(num);
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        let interval
        if (onScreen) {
            interval = setInterval(() => {
                if (counter < number) {
                    setCounter((prev) => prev + 1);
                } else {
                    clearInterval(interval);
                }
            }, Math.floor(2000 / number) || 1);
        }
        return () => clearInterval(interval);
    }, [counter, onScreen])

    return counter

}

export default useCounter