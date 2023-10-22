import React, { useState } from "react";
import "./App.css";
import Form from "./components/form";
import Header from "./components/header";

export default function App() {
  const [items, setItems] = useState("");

  function handleAddTask(item) {
    setItems((items) => [...items, item]);
  }
  function handleDeleteTask(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function handleToggleTask(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, done: !item.done } : item
      )
    );
  }

  return (
    <div className="App">
      <Header />
      <Form
        onAddTask={handleAddTask}
        onDeleteTask={handleDeleteTask}
        onToggleTask={handleToggleTask}
      />
      <List items={items} onDeleteTask={handleDeleteTask} />
    </div>
  );
}


// task list
function List({ items, onDeleteTask, onToggleTask }) {
  return (
    <div className="Task-list">
      <h3>My tasks</h3>
      {items.length === 0 ? (
        <div className="note">
          <h1>Please create a task</h1>
          <p>No task yet</p>
        </div>
      ) : (
        <ul>
          {items.map((item) => (
            <Item
              item={item}
              onDeleteTask={onDeleteTask}
              onToggleTask={onToggleTask} 
              key={item.id}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

function Item({ item, onDeleteTask, onToggleTask }) {
  function getColorForPriority (priority) {
    switch (priority) {
      case "Very Important":
        return "red";
      case "Important":
        return "orange";
      case "Not Important":
        return "green";
      default:
        return "black"; 
    }
  }

  return (
    <div className="note">
      <li>
       <span style={item.done ? { textDecoration: "line-through" } : {}}>
    <div className="task-group">
      <h2 id="task-title">{item.title}</h2>{" "}
      <p className="task-priority" style={{ color: getColorForPriority(item.option) }}>
        {item.option} <span id="dot">.</span>
      </p>
    </div>
  <p className="task-text">{item.description}</p>{" "}
</span>
      </li>
      <button className="button-del" onClick={() => onDeleteTask(item.id)}>
        Delete
      </button>
    </div>
  );
}

