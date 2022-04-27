import React, { useState } from "react";

const Input = ({ addTask }) => {
  const [task, setTask] = useState("");

  return (
    <div className="main__content__input-container">
      <form onSubmit={(e) => addTask(e, task)}>
        <input
          type="text"
          placeholder="add details"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default Input;
