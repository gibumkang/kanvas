import CheckMarkIcon from "./CheckMarkIcon/CheckMarkIcon";

const CheckMarkBullet = ({ children }) => {
    return (
        <div>
            <CheckMarkIcon />
            {children}
        </div>
    )
}

export default CheckMarkBullet;