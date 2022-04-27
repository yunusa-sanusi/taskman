import React from "react";
import { MdOutlineDelete } from "react-icons/md";

const Task = ({ id, item, status, markItemComplete, deleteSingleTask }) => {
  return (
    <div className="main__content__tasks-container-div">
      <div>
        <input
          type="checkbox"
          defaultChecked={status === "completed" ? true : false}
          onClick={() => markItemComplete(id)}
        />
        <p className={status === "completed" ? "completed" : ""}>{item}</p>
      </div>
      {status === "completed" ? (
        <MdOutlineDelete
          className="main__content__tasks-container__icon-delete"
          onClick={() => deleteSingleTask(id)}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default Task;
