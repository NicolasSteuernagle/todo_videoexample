import React from "react";
import { ITask } from "../Interfaces";

interface Props {
  task: ITask;
  completeTask(taskNameToDelete: string): void;
}

const TodoTask = ({ task, completeTask }: Props) => {
  return (
    <div className="task">
      <div className="content">
        <span>{task.taskName}</span>
        <span>Days Until Due: {task.deadline}</span>
        <span>Priority Level: {task.priority}</span>
      </div>
      <button
        onClick={() => {
          completeTask(task.taskName);
        }}
      >
          Clear Task
      </button>
    </div>
  );
};


export default TodoTask;