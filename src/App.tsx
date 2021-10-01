/**
 * Follow Tutorial From https://www.youtube.com/watch?v=bjnW2NLAofI
 */
import React, { FC, ChangeEvent, useState } from "react";
import "./App.css";
import TodoTask from "./Components/TodoTask";
import { ITask } from "./Interfaces";

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [deadline, setDealine] = useState<number>(0);
  const [priority, setPriority] = useState<string>("");
  const [notes, setNotes] = useState<string>("");
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else if(event.target.name === "deadline")
      setDealine(Number(event.target.value));
      else if(event.target.name === "priority")
        setPriority(event.target.value);
      else{
        setNotes((event.target.value));
      }
  };

  const addTask = (): void => {
    const newTask = { taskName: task, deadline: deadline, priority: priority, notes: notes };
    setTodoList([...todoList, newTask]);
    setTask("");
    setDealine(0);
    setPriority("");
    setNotes("");
  };

  const completeTask = (taskNameToDelete: string): void => {
    setTodoList(
      todoList.filter((task) => {
        return task.taskName !== taskNameToDelete;
      })
    );
  };

  return (
    <div className="App">
      <div className="header">
        <div className="inputContainer">
          <input
            type="text"
            placeholder="Task..."
            name="task"
            value={task}
            onChange={handleChange}
          />
          <input
            type="number"
            placeholder="Deadline (in Days)..."
            name="deadline"
            value={deadline}
            onChange={handleChange}
          />
          <input
            type = "text"
            placeholder="Priority level..."
            name = "priority"
            value = {priority}
            onChange={handleChange}
            />
            <input
              type = "text"
              placeholder="Notes..."
              name = "notes"
              value = {notes}
              onChange={handleChange}
            />
        </div>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="todoList">
        {todoList.map((task: ITask, key: number) => {
          return <TodoTask key={key} task={task} completeTask={completeTask} />;
        })}
      </div>
    </div>
  );
};

export default App;