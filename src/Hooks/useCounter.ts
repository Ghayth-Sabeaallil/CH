import { useState } from "react";

export const useCounter = () => {
    const [x, setX] = useState<number>(0 as number);
    const [type, setType] = useState<string>("");


    const incrementX: React.MouseEventHandler<HTMLButtonElement> = () => {
        if (x < 10) {
            setX((x) => x + 1);
        }
    };
    const decrementX: React.MouseEventHandler<HTMLButtonElement> = () => {
        if (x > -10) {
            setX((x) => x - 1);
        }
    };
    const reset: React.MouseEventHandler<HTMLButtonElement> = () => {
        setX(0);
    };
    const max: React.MouseEventHandler<HTMLButtonElement> = () => {
        setX(10);
    };
    const min: React.MouseEventHandler<HTMLButtonElement> = () => {
        setX(-10);
    };
    const evenOdd: React.MouseEventHandler<HTMLButtonElement> = () => {
        if (x % 2 == 0) {
            setType("Even Number");
        }
        else {
            setType("Odd Number");
        }
    };
    const plus3: React.MouseEventHandler<HTMLButtonElement> = () => {
        if (x <= 7) {
            setX((x) => x + 3);
        }
    };
    const min2: React.MouseEventHandler<HTMLButtonElement> = () => {
        if (x >= -7) {
            setX((x) => x - 2);
        }
    };
    return [x, incrementX, decrementX, reset, max, min, evenOdd, type, plus3, min2];
};
