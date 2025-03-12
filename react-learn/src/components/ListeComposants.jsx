import { useState, useEffect } from "react";

function ListeComposants() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((rep) => rep.json())
            .then((data) => {
                setData(data);
            })
            .catch((error) => console.error("Erreur de chargement :", error));
    }, []);

    return (
        <>
            <h2>Liste des Composants</h2>
            {data ? (
                <pre>{JSON.stringify(data, null, 2)}</pre>
            ) : (
                <p>Chargement...</p>
            )}
        </>
    );
}

export default ListeComposants;
