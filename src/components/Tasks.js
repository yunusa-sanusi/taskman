import React from "react";
import { MdOutlineDelete } from "react-icons/md";
import Task from "./Task";

const Tasks = ({
  tasks,
  isCompletedTasks,
  clearCompletedTasks,
  markItemComplete,
  activeBtn,
  feedbackText,
  deleteSingleTask,
}) => {
  return (
    <div className="main__content__tasks-container">
      {tasks.map((task) => {
        const { status } = task;
        return (
          (activeBtn === "all" || status === activeBtn) && (
            <Task
              key={task.id}
              {...task}
              markItemComplete={markItemComplete}
              deleteSingleTask={deleteSingleTask}
            />
          )
        );
      })}
      {(feedbackText && <p>{feedbackText}</p>) ||
        (tasks.length <= 0 && <p>You haven't added any task yet.</p>)}
      {isCompletedTasks && (
        <button
          className="main__content__tasks-btn-delete"
          type="button"
          onClick={clearCompletedTasks}
        >
          <MdOutlineDelete style={{ marginRight: "5px", fontSize: "15px" }} />
          Delete All
        </button>
      )}
    </div>
  );
};

export default Tasks;
