import React, {useState} from 'react';
import {useDarkMode} from './hooks/useDarkMode';

export const Mode = () => {
    const [darkMode, setDarkMode] = useDarkMode();
    const toggleMode = event => {
        event.preventDefault();
        setDarkMode(!darkMode);
    }

    return (
    <div onClick={toggleMode}>Mode: {darkMode ? "dark" : "light"}</div>
    )
}