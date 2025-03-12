import { useState, useEffect } from "react";


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

    useEffect(() => {                                   // Création du useEffect.
        const interval = setInterval(() => {            // Création de l'interval.
            setCount((currentCount) => {                // On prend le count d'avant pour lui rachouter 1 ce qui 
                return currentCount + 1                 // est plus pratique qu'avant car on s'assure de rajouter un au chiffre
            })                                          // de la seconde d'avant au lieu de count.
        }, 5000)                                        // On effectue cela toute les 1 seconde.
        return () => {                                  // On retourne aussi clear interval pour que le composant arrête de marché
            clearInterval(interval)                     // même après avoir était supprimé.
        }               
    }, [])                                              // On passe pas rien dans le tableau des dépandances.

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
                <input type="number" value={valeurBaseCompteur} onChange={choixCompteurValue} />
            </div>
        </>
    );
}

export default Compteur