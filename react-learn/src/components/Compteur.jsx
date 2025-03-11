import { useState } from "react";

function Compteur() {
    const [count, setCount] = useState(0);
    const [step, setStep] = useState(1);
    const [valeurBaseCompteur, setValeurBaseCompteur] = useState(0);

    function addClick() {
        setCount(prevCount => prevCount + step);
    }
    function choixIncrement(event) {
        setStep(Number(event.target.value));
    }
    function moinsClick() {
        setCount(prevCount => prevCount - step);
    }
    function réinitialClick() {
        setCount(valeurBaseCompteur);
    }
    function choixCompteurValue(event) {
        setValeurBaseCompteur(Number(event.target.value));
    }

    return (
        <>
            <div>
                <p>Compteur : {count}</p>
                <button onClick={addClick}>Increment</button>
                <button onClick={moinsClick}>Increment</button>
                <button onClick={réinitialClick}>Réinitialiser le compteur</button>
            </div>
            <div>
                <label>Régler la valeur d'incrémentation :</label>
                <input type="number" value={step} onChange={choixIncrement} />
            </div>
            <div>
                <label>Régler la valeur du compteur de base :</label>
                <input type="number" value={valeurBaseCompteur} onChange={choixCompteurValue}/>
            </div>
        </>
    );
}

export default Compteur