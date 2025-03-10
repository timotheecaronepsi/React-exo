import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import 'bootstrap/dist/css/bootstrap.css';
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
        <div className="tache">
          <div className="task-container">
            <input className="checkbox"></input>
            <span className="task-text">Tache 1 </span>

          </div>
          <div className="button-actions">
            <button className="modify-button"><FontAwesomeIcon icon={faEdit} /></button>
            <button className="delete-button"><FontAwesomeIcon icon={faTrash} /></button>
          </div>
        </div>

        <div className="tache">
          <div className="task-container">
            <input className="checkbox"></input>
            <span className="task-text">Tache 2 </span>

          </div>
          <div className="button-actions">
            <button className="modify-button"><FontAwesomeIcon icon={faEdit} /></button>
            <button className="delete-button"><FontAwesomeIcon icon={faTrash} /></button>
          </div>
        </div>

        <div className="tache">
          <div className="task-container">
            <input className="checkbox"></input>
            <span className="task-text">Tache 3 </span>

          </div>
          <div className="button-actions">
            <button className="modify-button"><FontAwesomeIcon icon={faEdit} /></button>
            <button className="delete-button"><FontAwesomeIcon icon={faTrash} /></button>
          </div>
        </div>

      </div>
    </>
  )
}
export default App