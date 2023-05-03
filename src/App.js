import { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [addText, setAddText] = useState("");
  const [hasError, setHasError] = useState(false);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (!addText) {
      setHasError(true);
      return;
    }
    setHasError(false);
    setTasks([
      ...tasks,
      {
        id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
        title: addText,
        isDone: false,
      },
    ]);
    setAddText("");
  };

  const handleToggleComplete = (id) => {
    const newList = tasks.map((task) => {
      if (task.id === id) {
        const updatedTask = {
          ...task,
          isComplete: !task.isComplete,
        };

        return updatedTask;
      }

      return task;
    });

    setTasks(newList);
  };

  const handleDelete = (id) => {
    const newList = tasks.filter((task) => task.id !== id);
    setTasks(newList);
  };

  return (
    <div className="mainContent">
      <h1 className="title">Todo List</h1>
      <form onSubmit={handleAddTask}>
        <div className="addTaskContainer">
          <div className="addTaskInputBox">
            <input
              className={hasError && "hasError"}
              value={addText}
              placeholder="Ex: Limpar a casa"
              onChange={(e) => setAddText(e.target.value)}
            />
            <button type="submit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 256 256"
              >
                <path d="M128,24A104,104,0,1,0,232,128,104.13,104.13,0,0,0,128,24Zm40,112H136v32a8,8,0,0,1-16,0V136H88a8,8,0,0,1,0-16h32V88a8,8,0,0,1,16,0v32h32a8,8,0,0,1,0,16Z"></path>
              </svg>
            </button>
          </div>
          {hasError && (
            <p className="errorMessage">Por favor, insira uma descrição.</p>
          )}
        </div>
      </form>
      {tasks.length ? (
        <ul className="taskList">
          {tasks.map((task) => (
            <li className={task.isComplete ? "taskCompleted" : ""}>
              <span>{task.title}</span>
              <div>
                <button
                  className="toggleCompleteButton"
                  onClick={() => handleToggleComplete(task.id)}
                >
                  {task.isComplete ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      fill="#000000"
                      viewBox="0 0 256 256"
                    >
                      <path d="M232,144a64.07,64.07,0,0,1-64,64H80a8,8,0,0,1,0-16h88a48,48,0,0,0,0-96H88v40a8,8,0,0,1-13.66,5.66l-48-48a8,8,0,0,1,0-11.32l48-48A8,8,0,0,1,88,40V80h80A64.07,64.07,0,0,1,232,144Z"></path>
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 256 256"
                    >
                      <path d="M243.33,90.91,114.92,219.31a16,16,0,0,1-22.63,0l-71.62-72a16,16,0,0,1,0-22.61l24-24a16,16,0,0,1,22.57-.06l36.64,35.27.11.11h0l92.73-91.37a16,16,0,0,1,22.58,0l24,23.56A16,16,0,0,1,243.33,90.91Z"></path>
                    </svg>
                  )}
                </button>
                <button
                  className="deleteButton"
                  onClick={() => handleDelete(task.id)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 256 256"
                  >
                    <path d="M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM112,168a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm0-120H96V40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8Z"></path>
                  </svg>
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div className="noTaskContainer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={64}
            height={64}
            viewBox="0 0 24 24"
          >
            <title>emoticon-sad</title>
            <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M7,9.5C7,8.7 7.7,8 8.5,8C9.3,8 10,8.7 10,9.5C10,10.3 9.3,11 8.5,11C7.7,11 7,10.3 7,9.5M14.77,17.23C14.32,16.5 13.25,16 12,16C10.75,16 9.68,16.5 9.23,17.23L7.81,15.81C8.71,14.72 10.25,14 12,14C13.75,14 15.29,14.72 16.19,15.81L14.77,17.23M15.5,11C14.7,11 14,10.3 14,9.5C14,8.7 14.7,8 15.5,8C16.3,8 17,8.7 17,9.5C17,10.3 16.3,11 15.5,11Z" />
          </svg>
          <p>Você ainda não possui nenhuma tarefa</p>
        </div>
      )}
    </div>
  );
}

export default App;
