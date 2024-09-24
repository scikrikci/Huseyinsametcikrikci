// import React, { useEffect } from 'react';

// // eslint-disable-next-line react/prop-types
// function Try({ text }) {
//     useEffect(() => {
//         console.log("App.jsx'ten gelen text:", text);
//     }, [text]);

//     return (
//         <div>
//             <p>Bu Try.jsx bileşeni.</p>
//         </div>
//     );
// }

// export default Try;


import { useState, useEffect } from "react";

const ScrambleText = () => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const [text, setText] = useState("HELLO"); // Initial text value
    const [scrambled, setScrambled] = useState(text); // Scrambled text

    useEffect(() => {
        setScrambled(text); // Reset scrambled text when original text changes
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
        }, 30);
    };

    return (
        <h1 data-value={text} onMouseOver={handleMouseOver}>
            {scrambled}
        </h1>
    );
};

export default ScrambleText;
