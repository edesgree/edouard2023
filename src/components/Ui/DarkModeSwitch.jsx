import { motion } from 'framer-motion';
import React, { useEffect } from 'react';
import { transitionSpring } from './constants';
import IconMoon from './icons/IconMoon';
import IconSun from './icons/IconSun';

export default function DarkModeSwitch() {
    const [darkMode, setDarkMode] = React.useState(() => {
        return localStorage.getItem('theme') === 'light';
    });

    const toggleSwitch = () => setDarkMode(prevDarkMode => !prevDarkMode);

    useEffect(() => {
        if (darkMode) {
            document.body.classList.remove('darkMode');
            document.body.classList.add('lightMode');
            localStorage.setItem('theme', 'light');
        } else {
            document.body.classList.add('darkMode');
            document.body.classList.remove('lightMode');
            localStorage.setItem('theme', 'dark');
        }
    }, [darkMode]);

    useEffect(() => {
        const prefersLightMode = window.matchMedia('(prefers-color-scheme: light)').matches;
        if (localStorage.getItem('theme') === 'light' || (!localStorage.getItem('theme') && prefersLightMode)) {
            setDarkMode(false);
        } else {
            setDarkMode(true);
        }
    }, []);

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
