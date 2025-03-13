import { useState } from 'react'
import '../App.css'

function Plateau() {
    const [morpion, setMorpion] = useState(Array(9).fill(null)) 
    const [joueur, setJoueur] = useState(true) 

    function clickCase(num) {
        if (morpion[num] || gagnant(morpion)) return;
        let copie = [...morpion]
        copie[num] = joueur ? "X" : "O"
        setMorpion(copie)
        setJoueur(!joueur)
    }

    let win = gagnant(morpion)
    let info = win ? "Gagné : " + win : "Tour de : " + (joueur ? "X" : "O")

    return (
        <div className="morpion">
            <h2>{info}</h2>
            <div className="board">
                {morpion.map((valeur, i) => (
                    <button key={i} className="cell" onClick={() => clickCase(i)}>
                        {valeur}
                    </button>
                ))}
            </div>
            <button onClick={() => setMorpion(Array(9).fill(null))}>Rejouer</button>
        </div>
    )
}

function gagnant(jeu) {
    let verif = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], 
        [0, 3, 6], [1, 4, 7], [2, 5, 8] 
    ]
    for (let v of verif) {
        let [a, b, c] = v
        if (jeu[a] && jeu[a] === jeu[b] && jeu[a] === jeu[c]) {
            return jeu[a]
        }
    }
    return null
}

export default Plateau
