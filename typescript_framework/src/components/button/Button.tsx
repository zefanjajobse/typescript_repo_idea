import { MouseEventHandler } from "react";

export type ButtonProps = {
    text?: string;
    disabled?: boolean;
    primary?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
};


const Button: React.FC<ButtonProps> = ({
    disabled,
    text,
    primary,
    onClick,
    ...props
}) => {
    return (
        <button
            type="button"
            onClick={onClick}
            style={{ color: primary ? "blue" : "gray" }}
            disabled={disabled}
            {...props}
        >
            {text}
        </button>
    );
};

export default Button;