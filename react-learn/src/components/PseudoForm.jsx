import { useState } from "react";

function PseudoForm() {
    const [speudo, setSpeudo] = useState("");

    const handleChange = (event) => {
        setSpeudo(event.target.value);
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        console.log("Formulaire envoyé :", speudo);
    };


return (
    <>
        <form onSubmit={onFormSubmit}>
            <input type="text" name="pseudo" value={speudo} onChange={handleChange} />
            <button type="submit">Envoyer</button>
        </form>
        <p>Votre pseudo est : {speudo}</p>
    </>
    );
}

export default PseudoForm;