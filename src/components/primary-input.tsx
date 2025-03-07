import React from "react";

interface PrimaryInputProps {
    value: string;
    handlechange: (value: string) => void;
    placeholder?: string;
}

export function PrimaryInput({ value, handlechange, placeholder }: PrimaryInputProps) {
    { return(
        <input
            type="text"
            value={value}
            onChange={(e) => handlechange(e.target.value)}
            placeholder={placeholder}
            className="border rounded-lg px-4 py-2"
            />
    );
}
}