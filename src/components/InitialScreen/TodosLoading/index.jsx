import React from "react";
import "./TodosLoading.css"

function TodosLoading() {
  return (
    <div className="LoadingTodo-container">
        <div className="LoadingTodo-dot"></div>
        <div className="LoadingTodo-dot"></div>
        <div className="LoadingTodo-dot"></div>
    </div>
  );
}

export { TodosLoading };