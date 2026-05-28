import { motion } from 'framer-motion';
import React from 'react';
import { transitionSpring } from './constants';
import IconMoon from './icons/IconMoon';
import IconSun from './icons/IconSun';

export default function DarkModeSwitch() {
    const [darkMode, setDarkMode] = React.useState(() => {
        const saved = localStorage.getItem('theme');
        if (saved) return saved === 'dark';
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
    });

    const toggleSwitch = () => setDarkMode(prevDarkMode => !prevDarkMode);

    React.useEffect(() => {

        document.body.classList.toggle('darkMode', darkMode);
        document.body.classList.toggle('lightMode', !darkMode);

        localStorage.setItem('theme', darkMode ? 'dark' : 'light');
    }, [darkMode]);



    return (
        <button
            onClick={toggleSwitch}
            className="button is-secondary is-small"
            aria-label="switch theme color"
        >
            <span className="icon is-small">
                <motion.div className="icon-svg" transition={transitionSpring}>
                    {darkMode ? <IconSun /> : <IconMoon />}
                </motion.div>
            </span>
        </button>
    );
}
