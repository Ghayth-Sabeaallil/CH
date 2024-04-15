import { useCounter } from '../Hooks/useCounter';
import Button from './Button'

type CounterProps = {
    start: number,
    minV: number,
    maxV: number
    plus: number,
    minus: number
};

const Counter = ({ start, minV, maxV, plus, minus }: CounterProps) => {

    const [x, incrementX, decrementX, reset, type, plus3, min2] = useCounter({ start, minV, maxV, plus, minus }) as any;
    return (
        <div className="center">
            <h1>HOOKS</h1>
            <p>{x}</p>
            <div className="btn">
                <Button handleClick={incrementX} test={"+"} />
                <Button handleClick={decrementX} test={"-"} />
                <Button handleClick={reset} test={"Reset"} />
                <Button handleClick={plus3} test={`+${plus}`} />
                <Button handleClick={min2} test={`-${minus}`} />
            </div>
            <p>{type}</p>
        </div>
    )
}

export default Counter