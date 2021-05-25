import React from 'react'

type ButtonTypes = 'success' | 'error' | 'primary' | 'secondary'

interface IProps {
    content?: string;
    type?: ButtonTypes;
    clickHandler?: () => void;
}
const Button: React.FC<IProps> = ({ content, type = "primary", clickHandler }) => {
    return (
        <button className="Button" data-type={type} onClick={clickHandler}>
            {content}
        </button>
    )
}

export default Button
