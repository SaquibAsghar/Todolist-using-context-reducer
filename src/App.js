import React, { useReducer } from "react";
import { Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { TodoContext } from "./Context/TodoContext";
import TodoReducer from "./Context/TodoReducer";
import "./App.css";
import { TodoForm } from "./Components/TodoForm";
import Todos from "./Components/RemoveTodos";

function App() {
	const [todos, dispatch] = useReducer(TodoReducer, []);
	return (
		<div className="App">
			<TodoContext.Provider value={{ todos, dispatch }}>
				<Container fluid>
					<h1>Todos App with context Api</h1>
					<Todos />
					<TodoForm />
					
				</Container>
			</TodoContext.Provider>
		</div>
	);
}

export default App;
