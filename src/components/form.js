import { useState } from "react";
import "../App.css";

export default function Form({onAddTask}) {
    const [description, setDescription] = useState("");
    const [option, setOption] = useState('');
    const [title, setTitle] = useState('');
  
    function handleSubmit(e) {
      e.preventDefault();
  // Submission is impossibe if there's no description
     if (!description || !title) return;
  
      const newTask = {description, option, title, done: 
      false, id: Date.now()};
      console.log(newTask);
  
      onAddTask(newTask)
  // Setting it back to default after submission
      setDescription('');
      setTitle('')
      setOption('')
    }
    return (
      <form onSubmit={handleSubmit} className="form-main">
        <h3>Add a New Task</h3>
        {/* When we type anything the change event is fired and we listen with onchange and set the value to setDesctiption */}
        <div className="form-input custom-select">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />
        <textarea
         type="text"
         value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Task Description..."
          rows="3"
        />
        </div>
        <select className="select select-field" value={option} onChange={(e) => setOption(e.target.value)}>
            <option value="">Task Priority</option>
            <option value="Very Important">
                Very Important
            </option>
            <option value="Important">
                Important
            </option>
            <option value="Not Important">
                Fairly Important
            </option>
        </select>
        <button className="button">Add Task</button>
      </form>
    );
  }