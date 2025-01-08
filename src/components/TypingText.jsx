import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export const TypingText = ({ text }) => {
    const [displayedText, setDisplayedText] = useState('');

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setDisplayedText((prev) => prev + text[index]);
            index++;
            if (index === text.length) {
                clearInterval(interval);
            }
        }, 100);
        return () => clearInterval(interval);
    }, [text]);

    return <span>{displayedText}</span>;
};

TypingText.propTypes = {
    text: PropTypes.string.isRequired,
};