import { useEffect, useState } from "react";

type useCounterProps = {
    start: number,
    minV: number,
    maxV: number,
    plus: number,
    minus: number
};
export const useCounter = ({ start, minV, maxV, plus, minus }: useCounterProps) => {
    const [x, setX] = useState<number>(start);
    const [type, setType] = useState<string>("");


    useEffect(() => {
        if (x % 2 == 0) {
            setType("Even Number");
        }
        else {
            setType("Odd Number");
        }
    }, [x]);


    const incrementX: React.MouseEventHandler<HTMLButtonElement> = () => {
        if (x < maxV) {
            setX((x) => x + 1);
        }
    };
    const decrementX: React.MouseEventHandler<HTMLButtonElement> = () => {
        if (x > -1) {
            setX((x) => x - 1);
        }
    };
    const reset: React.MouseEventHandler<HTMLButtonElement> = () => {
        setX(0);
    };
    const plus3: React.MouseEventHandler<HTMLButtonElement> = () => {
        if (x <= (maxV - plus)) {
            setX((x) => x + plus);
        }
    };
    const min2: React.MouseEventHandler<HTMLButtonElement> = () => {
        if (x >= (minV + minus)) {
            setX((x) => x - minus);
        }
    };
    return [x, incrementX, decrementX, reset, type, plus3, min2];
};
