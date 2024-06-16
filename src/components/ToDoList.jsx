import React from 'react';

const ToDoList = ({ toDo }) => {
  return (
    <li>
      <input type="checkbox" />
      <p className="title">{toDo}</p>
      <button className="btn btn--edit">edit</button>
      <button className="btn btn--remove">remove</button>
    </li>
  );
};

export default ToDoList;
