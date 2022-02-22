import CheckMarkIcon from "./CheckMarkIcon/CheckMarkIcon";

const CheckMarkBullets = ({ children }) => {
    return (
        <div>
            <CheckMarkIcon />
            {children}
        </div>
    )
}

export default CheckMarkBullets;