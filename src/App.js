import { useState } from "react";
import Items from "./components/items";
import { addTask, removeTask, editTask } from "./utils/utils";

const App = () => {
    const [text, setText] = useState("");
    const [array, setArray] = useState([]);
    const [inputValid, setInputValid] = useState(true); // To track input validity
    const [message, setMessage] = useState(""); // To display validation messages

    const submit = (e) => {
        e.preventDefault();
        const result = addTask(array, text);
        setArray(result.array);
        setInputValid(result.isValid); // Set input validity flag
        setMessage(result.message); // Set validation message

        if (result.isValid) {
            setText(""); // Clear input field if valid
        }
    };

    const remove = (index) => {
        setArray(removeTask(array, index));
    };

    const edit = (index) => {
        setArray(editTask(array, index, text));
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-5">
                    <div className="card">
                        <div className="card-header bg-primary text-white">
                            <center>
                                <h3 className="card-title">Task App</h3>
                            </center>
                        </div>
                        <div className="card-body">
                            <form id="myForm" onSubmit={submit}>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        onChange={(e) => setText(e.target.value)}
                                        placeholder="Enter task here ..."
                                        className={`form-control mb-4 shadow-none ${!inputValid ? "border-danger" : ""}`}
                                        id="name"
                                        value={text}
                                    />
                                    {!inputValid && (
                                        <p className="text-danger mt-2">{message}</p> // Display error message
                                    )}
                                </div>
                                <button id="submit" className="btn btn-primary">
                                    Add
                                </button>
                            </form>
                            <Items array={array} remove={remove} edit={edit} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
