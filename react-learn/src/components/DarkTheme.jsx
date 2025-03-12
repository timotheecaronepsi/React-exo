import { useState, useEffect } from "react";

function DarkTheme() {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme") || "light";
    });

    useEffect(() => {
        document.body.className = theme;
        localStorage.setItem("theme", theme);
    }, [theme]);

    const switchTheme = (newTheme) => {
        if (window.confirm(`Voulez-vous passer en mode ${newTheme} ?`)) {
            setTheme(newTheme);
        }
    };

    return (
        <div>
            <h2>Thème actuel : {theme}</h2>
            <button onClick={() => switchTheme("dark")}>🌙 Mode Sombre</button>
            <button onClick={() => switchTheme("light")}>☀️ Mode Clair</button>
        </div>
    );
}

export default DarkTheme;
