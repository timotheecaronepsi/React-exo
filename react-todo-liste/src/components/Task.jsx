import '../App.css';


function Task() {
    return (
        <>
            <div className="tache">
                <div className="task-containeur">
                <button className="checkbox"></button>
                <span>Tache</span>
                </div>
                <div className="button-actions">
                    <button className="modify-button"></button>
                    <button className="delete-button"></button>
                </div>
            </div>
        </>
    )
}

export default Task