import React from 'react';

const ToDoItem = ({ item: { data, isHidden }, index, dispatch }) => {
  return (
    <div style={{
      backgroundColor: "cyan",
      width: "90vw",
      filter: `${isHidden ? "blur(1px)" : "blur(0px)"}`
    }}>

      <h3>{isHidden ? "This content is hidden" : data}</h3>
      <button onClick={() => {
        dispatch({ type: "CHANGE_ISHIDDEN", payload: index });
      }}>Toggle</button>
    </div>
  );
};

export default ToDoItem;
