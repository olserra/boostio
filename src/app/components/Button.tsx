import React, { useEffect } from "react";

const Button = ({
    className,
    children,
    onClick,
    type = "button", // Default type
    disabled = false, // Default disabled state
    ...props
}: {
    className: string;
    children: React.ReactNode;
    onClick: () => void;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
}) => {
    const baseStyle =
        "font-sans rounded font-medium py-2 px-4 min-w-[70px] min-h-[40px] text-white bg-gray-400";
    const disabledStyle = "bg-gray-500 cursor-not-allowed !text-gray-3800";

    useEffect(() => {
        // listen to disabled state changes
        console.log("Button disabled state changed: ", disabled);
    }, [disabled]);

    return (
        <button
            type={type as "button" | "submit" | "reset"}
            disabled={disabled}
            onClick={onClick}
            className={`${className ? className : baseStyle} ${disabled ? disabledStyle : ""
                }`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
