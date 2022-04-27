import React from "react";
import Button from "./Button";

const Tab = ({ status, filterTasks, activeBtn }) => {
  return (
    <div className="main__content__tab-container">
      {status.map((stat, index) => {
        return (
          <Button
            key={index}
            status={stat}
            filterTasks={filterTasks}
            activeBtn={activeBtn}
          />
        );
      })}
    </div>
  );
};

export default Tab;
