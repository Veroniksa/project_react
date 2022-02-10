import React, { useContext } from "react";
import { ThemeContext } from "../utils/ThemeContext";

import './styles.css';

export const ButtonTop = ({children}) => {
    const contextVal = useContext(ThemeContext);
    console.log(contextVal);
    return (
        <div className={`my-button ${
            contextVal.theme === 'light' ? 'button-light' : 'button-dark'
            }`} 
            role="button">
            { children }
        </div>
    )
};