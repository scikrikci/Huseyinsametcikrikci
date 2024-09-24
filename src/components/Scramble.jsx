/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

const ScrambleText = ({ text, class_name }) => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";



    const [scrambled, setScrambled] = useState(text);

    useEffect(() => {
        setScrambled(text);
    }, [text]);

    const handleMouseOver = (event) => {
        let iteration = 0;
        const originalText = event.target.dataset.value;
        let interval = setInterval(() => {
            setScrambled((prevText) =>
                prevText
                    .split("")
                    .map((letter, index) => {
                        if (index < iteration) {
                            return originalText[index];
                        }
                        return letters[Math.floor(Math.random() * 26)];
                    })
                    .join("")
            );

            if (iteration >= originalText.length) {
                clearInterval(interval);
            }

            iteration += 1 / 3;
        }, 20);
    };

    return (
        <h1
            data-value={text}
            onMouseOver={handleMouseOver}
            className={class_name} // Dinamik olarak sınıf ekleyebiliriz
        >
            {scrambled}
        </h1>
    );
};

export default ScrambleText;
