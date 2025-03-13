import { useState, useEffect } from "react";

function SimpleInput() {
    const [text, setText] = useState("");
    const [error, setError] = useState(""); 

    const handleChange = (event) => {
        const value = event.target.value;
        setText(value);

        if (value.length > 0 && value.length < 3) {
            setError("Le texte doit contenir au moins 3 caractères.");
        } else {
            setError(""); 
        }
    };

    return (
        <div>
            <input type="text" value={text} onChange={handleChange} />
            <p>Valeur : {text}</p>
            {error && <p style={{ color: "red" }}>{error}</p>} 
        </div>
    );
}



export default SimpleInput;