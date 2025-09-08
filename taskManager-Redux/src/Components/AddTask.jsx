import React, { useState } from "react";
import "./task.css";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../features/task/taskslice";

const AddTask = () => {
  const [text, SetText] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask(text));
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="form">
        <input
          className="input"
          type="text"
          placeholder="add task"
          value={text}
          onChange={(e) => SetText(e.target.value)}
        />
        <button className="button" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddTask;
