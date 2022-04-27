import React from "react";

const Button = ({ status, filterTasks, activeBtn }) => {
  return (
    <>
      <button
        type="button"
        className="main__content__tab-container-button"
        onClick={() => filterTasks(status)}
      >
        {status}
        {activeBtn === status ? (
          <div className="underline"></div>
        ) : (
          <div className="no-underline"></div>
        )}
      </button>
    </>
  );
};

export default Button;
