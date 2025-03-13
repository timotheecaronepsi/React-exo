import { useState } from 'react'
import '../App.css'

function Speudo() {
    const [redName, setRedName] = useState("");
    const [blueName, setBlueName] = useState("");

    const RedChange = (event) => {
        const value = event.target.value;
        setRedName(value);
    }

    const BlueChange = (event) => {
        setBlueName(event.target.value);
    }

    return (
        <>
            <p className="redname">Nom du joueur rouge : {redName}</p>
            <input type="text" value={redName} onChange={RedChange} />
            <p className="bluename">Nom du joueur bleu : {blueName}</p>
            <input type="text" value2={blueName} onChange={BlueChange} />
        </>

    );

};

export default Speudo