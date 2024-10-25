import React, { useState } from 'react';

function Todo() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    setTasks([...tasks, { text: newTask, completed: false }]);
    setNewTask('');
  };

  const toggleTask = (index) => {
    const updatedTasks = tasks.map((task, i) => 
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>Lista de Tarefas</h1>
      <input 
        type="text" 
        value={newTask} 
        onChange={(e) => setNewTask(e.target.value)} 
        placeholder="Adicionar nova tarefa" 
      />
      <button onClick={addTask}>Adicionar</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            {task.text}
            <button onClick={() => toggleTask(index)}>Concluir</button>
            <button onClick={() => deleteTask(index)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
