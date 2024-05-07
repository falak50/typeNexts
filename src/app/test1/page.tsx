"use client"
import React from 'react';

// Defining Types
type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

// Composing Types
type TodoListProps = {
  todos: Todo[];
};

// Unions
type Status = "active" | "completed";

// Generics
function filterTodos<T extends Todo>(todos: T[], status: Status): T[] {
  return todos.filter(todo => {
    if (status === "active") {
      return !todo.completed;
    } else {
      return todo.completed;
    }
  });
}

export default function TodoList({ todos }: TodoListProps) {
  // Types by Inference
  const name = "John";
  const age = 30;

  // Structural Type System
  interface Point2D {
    x: number;
    y: number;
  }

  interface Point3D {
    x: number;
    y: number;
    z: number;
  }

  // Example todos
  const exampleTodos: Todo[] = [
    { id: 1, text: "Learn TypeScript", completed: false },
    { id: 2, text: "Build a React app", completed: true },
    { id: 3, text: "Deploy the app", completed: false }
  ];

  // Using Generics
  const activeTodos = filterTodos(exampleTodos, "active");
  const completedTodos = filterTodos(exampleTodos, "completed");
  console.log(activeTodos);

  return (
    <div>
      <h1>Todo List</h1>
      <h2>Active Todos</h2>
      <h1>------- start ------- activeTodos --------------</h1>
      <ul>
        {activeTodos.map(todo => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
      <h1>------- end ------- activeTodos --------------</h1>
      <h2>Completed Todos</h2>
      <h1>------- start ------- activeTodos --------------</h1>
      <ul>
        {completedTodos.map(todo => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
      <h1>------- end ------- activeTodos --------------</h1>
    </div>
  );
}
