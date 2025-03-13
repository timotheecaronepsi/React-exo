import { useState } from 'react'
import '../App.css'

function Score() {
const  [scoreRouge, setScoreRouge] = useState(0)
const  [scoreBleu, setScoreBleu] = useState(0)

    return (
            <>
            <p className="redname">Point rouge : </p>
            <p className="bluename">Point bleu : </p>
            </>
    );
};

export default Score