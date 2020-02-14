import React, {useState} from 'react';
import {useDarkMode} from './hooks/useDarkMode';
import "./Mode.css";

export const Mode = () => {
    const [darkMode, setDarkMode] = useDarkMode();
    const toggleMode = event => {
        event.preventDefault();
        setDarkMode(!darkMode);
    }

    return (
    <div className="mode" onClick={toggleMode}>Mode: {darkMode ? "dark" : "light"}</div>
    )
}