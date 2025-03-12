import './App.css';
import Task from './components/Task';


function App() {
  return (
    <>
      <body>
        <h1 className="titre-centre">Liste des tâches à réaliser</h1>
        <div className="button-container">
          <button className="button-ajout">Ajouter +</button>
          <select className="filter-select">
            <option value="toutes">Toutes</option>
            <option value="termine">Terminées</option>
            <option value="encours">En cours</option>
          </select>
        </div>
        <div className="tache-containeur">
          <Task />
          <Task />
          <Task />

        </div>
      </body>
    </>
  )
}

export default App
/* 
        <div className="actions-bar">
          <Button color="primary" handleClick={() => console.log("Bouton Ajouter")}>Ajouter <FontAwesomeIcon icon={faPlus} /></Button>
          <Button color="secondary">Toutes <FontAwesomeIcon icon={faAngleDown} /></Button>
        </div>
 */