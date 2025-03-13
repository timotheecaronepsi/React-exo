import './App.css';
import Button from './components/Button';
import TaskItem from './components/TaskItem';
import Compteur from './components/Compteur';
import DarkTheme from './components/DarkTheme';
import SimpleInput from './components/UserForm';
import PseudoForm from './components/PseudoForm';
import ListeComposants from './components/ListeComposants';
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faAngleDown } from "@fortawesome/free-solid-svg-icons";



function App() {
  return (
    <>
      <div className="container">
        <h1 className="title">Liste des tâches à réaliser</h1>
        <div className="actions-bar">
          <Button color="primary" handleClick={() => console.log("Bouton Ajouter")}>Ajouter <FontAwesomeIcon icon={faPlus} /></Button>
          <Button color="secondary">Toutes <FontAwesomeIcon icon={faAngleDown} /></Button>
        </div>
        <div className="task-container">
          <TaskItem />
          <TaskItem />
          <TaskItem />
        </div>
        <Compteur />
        <DarkTheme />
        <SimpleInput />
        <PseudoForm />
        <ListeComposants />
      </div>
    </>
  )
}
export default App