import { useState } from 'react';
import ToDoList from './components/ToDoList';
import './app.scss';

function App() {
  let [toDos, setToDos] = useState([
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, corporis.',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, animi?',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, animi?',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, animi?',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, animi?',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, animi?',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, animi?',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, animi?',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, animi?',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, animi?',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, animi?',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, animi?',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, animi?',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, animi?',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, animi?',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, animi?',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, animi?',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, animi?',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, animi?',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, animi?',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, animi?',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, animi?',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, animi?',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, animi?',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, animi?',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, animi?',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, animi?',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, animi?',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, animi?',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, animi?',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, animi?',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, animi?',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, animi?',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, animi?',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, animi?',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, animi?',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, animi?',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, animi?',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, animi?',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, animi?',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, animi?',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, animi?',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, animi?',
  ]);
  return (
    <div className="main">
      <h1 className="title">Todo List</h1>
      <form className="form">
        <input
          className="form__text"
          type="text"
          placeholder="A new task to do"
        />
        <button className="form__submit">
          <span className="material-symbols-outlined">add</span>
        </button>
      </form>
      <ul className="to-do-list">
        {toDos.map((toDo) => {
          return <ToDoList toDo={toDo} />;
        })}
      </ul>
    </div>
  );
}

export default App;
