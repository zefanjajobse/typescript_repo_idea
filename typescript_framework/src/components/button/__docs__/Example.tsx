import React, { FC } from "react";
import Button, { ButtonProps } from "../Button";

const Example: FC<ButtonProps> = ({
    disabled = false,
    onClick = () => { },
    primary = false,
    text = "Button",
}) => {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
            }}
        >
            <Button
                text={text}
                disabled={disabled}
                onClick={onClick}
                primary={primary}
            />
        </div>
    );
};

export default Example;