import React, { useState, useEffect } from "react";
import Tab from "./components/Tab";
import Tasks from "./components/Tasks";

const status = ["all", "active", "completed"];

const getDataFromLocalStorage = () => {
  const tasks = JSON.parse(localStorage.getItem("tasks"));
  return tasks || [];
};

function App() {
  const [tasks, setTasks] = useState(getDataFromLocalStorage);
  const [isCompletedTasks, setIsCompletedTasks] = useState(false);
  const [task, setTask] = useState("");
  const [activeBtn, setActiveBtn] = useState("all");
  const [feedbackText, setFeedbackText] = useState("");

  const filterTasks = (stat) => {
    if (stat === "all") {
      setTasks(tasks);
      setIsCompletedTasks(false);
      setActiveBtn(stat);
      setFeedbackText("");
      return;
    }
    if (stat === "completed") {
      setFeedbackText("");
      setIsCompletedTasks(true);

      if (getTaskCount("completed") <= 0) {
        setFeedbackText("You haven't completed any task yet.");
      }
    } else {
      setFeedbackText("");
      setIsCompletedTasks(false);

      if (getTaskCount("active") <= 0) {
        setFeedbackText("You do not have active any task.");
      }
    }
    setActiveBtn(stat);
  };

  const addTask = (e) => {
    e.preventDefault();
    setTasks([
      ...tasks,
      { id: new Date().getTime().toString(), item: task, status: "active" },
    ]);
    setTask("");
  };

  const clearCompletedTasks = () => {
    const newTasks = tasks.filter((task) => task.status !== "completed");
    return setTasks(newTasks);
  };

  const deleteSingleTask = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    return setTasks(newTasks);
  };

  const markItemComplete = (id) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, status: "completed" };
        }
        return task;
      }),
    );
  };

  const getTaskCount = (status) => {
    const newTasks = tasks.filter((task) => task.status === status);
    return newTasks.length;
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <main className="main">
      <section className="main__content">
        <h1 className="main__content-heading">#taskman</h1>
        <Tab status={status} filterTasks={filterTasks} activeBtn={activeBtn} />
        <div className="main__content__input-container">
          <form onSubmit={addTask}>
            <input
              type="text"
              placeholder="add details"
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
            <button type="submit">Add</button>
          </form>
        </div>
        <Tasks
          tasks={tasks}
          isCompletedTasks={isCompletedTasks}
          clearCompletedTasks={clearCompletedTasks}
          markItemComplete={markItemComplete}
          activeBtn={activeBtn}
          feedbackText={feedbackText}
          deleteSingleTask={deleteSingleTask}
        />
      </section>
    </main>
  );
}

export default App;
