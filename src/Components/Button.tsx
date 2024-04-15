type ButtonProps = {
    handleClick: React.MouseEventHandler<HTMLButtonElement>;
    test: string
};
const Button = ({ handleClick, test }: ButtonProps) => {

    return (
        <button onClick={handleClick}>{test}</button>
    )
}

export default Button