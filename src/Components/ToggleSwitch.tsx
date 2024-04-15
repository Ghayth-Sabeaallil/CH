import "./ToggleSwitch.scss"
import { useToggle } from '../Hooks/useToggle';

const ToogleSwitch = () => {

    const [power, switsh] = useToggle() as any;

    return (
        <>

            <label className="ToggleSwitch">
                <input onClick={switsh} type="checkbox" />
                <span className="slider round"></span>
            </label>
            <p>{`${power}`}</p>
        </>
    )
}

export default ToogleSwitch