'use client'
import { FormEvent, useEffect, useState } from "react";

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

export default function Home() {
  const [todoList, setTodosList] = useState<Todo[]>([]);
  const [todoInput, setTodoInput] = useState('');

  const fetchTodos = async () => {
    const res = await fetch('/api/todos');
    const data = await res.json();
    setTodosList(data);
  };

  const getInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodoInput(event.target.value);
  };

  const add = async (event: FormEvent) => {
    event.preventDefault();
    await fetch('/api/todos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: todoInput })
    });
    setTodoInput('');
    fetchTodos();
  };

  const updateCompletion = async (id: number, completed: boolean) => {
    await fetch('/api/todos', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, completed }),
    });
    fetchTodos();
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  // Styles
  const containerStyle: React.CSSProperties = {
    width: '500px',
    maxHeight: '500px',
    margin: '50px auto',
    padding: '20px',
    borderRadius: '12px',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
  };

  const headingStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#333',
  };

  const formStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '20px',
  };

  const inputStyle: React.CSSProperties = {
    flex: 1,
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    marginRight: '10px',
  };

  const buttonStyle: React.CSSProperties = {
    padding: '10px 20px',
    fontSize: '16px',
    border: 'none',
    backgroundColor: '#4caf50',
    color: 'white',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  const tableStyle: React.CSSProperties = {
    width: '100%',
    borderCollapse: 'collapse',
  };

  const tdStyle: React.CSSProperties = {
    padding: '12px',
    borderBottom: '1px solid #ddd',
    fontSize: '16px',
  };

  const checkboxStyle: React.CSSProperties = {
    transform: 'scale(1.2)',
    cursor: 'pointer',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>To Do List Demo</h1>
      <div>
        <form onSubmit={add} style={formStyle}>
          <input
            type="text"
            value={todoInput}
            onChange={getInput}
            style={inputStyle}
          />
          <button type="submit" style={buttonStyle}>
            Add To Do
          </button>
        </form>
      </div>
      <table style={tableStyle}>
        <tbody>
          {todoList.map((todo) => (
            <tr key={todo.id} style={{ cursor: 'pointer', transition: 'background-color 0.2s ease' }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#f1f1f1')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '')}
            >
              <td style={tdStyle}>{todo.title}</td>
              <td style={tdStyle}>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={(e) =>
                    updateCompletion(todo.id, e.target.checked)
                  }
                  style={checkboxStyle}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
