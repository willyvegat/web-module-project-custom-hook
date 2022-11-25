import { useState } from 'react';
import useLocalStorage from './useLocalStorage';

const useDarkMode = (initialValue) => {
    const [darkMode, setDarkMode] = useLocalStorage("darMode", initialValue);
    return [darkMode, setDarkMode];
};

export default useDarkMode;