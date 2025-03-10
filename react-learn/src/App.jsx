import "./App.css"

function App() {
  return (
    <>
      <h1 className="titre-centre">Liste des tâches à faire</h1>

      <div className="button-container">
      <button className="button-ajout">Ajouter + </button>
      <button className="filter-select">Toutes ^ </button>
      </div>

      <div className="tache-containeur">
        <span className="tache"></span>
      </div>
    </>
  )
}
export default App 