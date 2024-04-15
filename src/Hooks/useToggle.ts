import { useState } from "react";

type useToggle = {
    on: boolean,
    off: boolean,

};
export const useToggle = () => {
    const [power, setPower] = useState<boolean>(false);


    const switsh: React.MouseEventHandler<HTMLInputElement> = () => {
        if (power) {
            setPower(false);
        }
        else {
            setPower(true);
        }

    };
    return [power, switsh];
};
