import React from "react";

const Todos = ({ todos, deleteTodo }) => {
  const todoList = todos.length ? (
    todos.map(todo => {
      return (
        <div
          className="collection-item"
          key={todo.id}
          onClick={() => {
            deleteTodo(todo.id);
          }}
        >
          {todo.content}
        </div>
      );
    })
  ) : (
    <p className="center">Your Todo's list is Empty!</p>
  );
  return <div className="todos collection">{todoList}</div>;
};

export default Todos;
