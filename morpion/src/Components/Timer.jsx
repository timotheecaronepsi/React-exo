import { useState, useEffect } from "react";
import '../App.css'

function Timer() {
    const [second, setSecond] = useState(0);
    const [marche, setMarche] = useState(false);

    useEffect(() => {                                 // Vu dans le chapitre 8 mais sous la forme du compteur
        let interval;
        if (marche) {
            interval = setInterval(() => {
                setSecond((sec) => sec + 1);
            }, 1000);
        } else {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [marche]);

    const startTimer = () => setMarche(true);


    return (
        <div className="timer">
            <h1>Timer : {second} secondes</h1>
            <button onClick={startTimer} disabled={marche}>Jouer</button>
        </div>
    );
};

export default Timer;