import "./app.css";

export default function App() {
    return (
    <div className="app-wrapper">
        <h1>Tâches</h1>

        <Form />

        <Todo />
    </div>
    );
}

const Form = () => {
    return <div></div>;
}

const Todo = () => {
    return <div>
        <Checkbox />
    </div>;
}

const Checkbox = () => {
    return <div></div>;
}
