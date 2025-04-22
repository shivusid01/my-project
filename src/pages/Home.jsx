import { useState } from 'react';

const Home = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim() === '') return;
    
    const todo = {
      id: Date.now(),
      text: newTodo,
      completed: false
    };
    
    setTodos([...todos, todo]);
    setNewTodo('');
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const totalTodos = todos.length;
  const completedTodos = todos.filter(todo => todo.completed).length;
  const pendingTodos = totalTodos - completedTodos;

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Todo App</h1>
        
        <div className="flex mb-8">
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Add a new task..."
            className="flex-grow p-3 border border-gray-300 rounded-l bg-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            onKeyPress={(e) => e.key === 'Enter' && addTodo()}
          />
          <button
            onClick={addTodo}
            className="bg-purple-700 hover:bg-purple-800 text-white px-6 py-3 rounded-r font-medium transition-colors"
          >
            Add
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
            <h3 className="font-medium text-gray-500">Total Tasks</h3>
            <p className="text-2xl font-bold">{totalTodos}</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow border border-green-200">
            <h3 className="font-medium text-gray-500">Completed</h3>
            <p className="text-2xl font-bold text-green-600">{completedTodos}</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow border border-yellow-200">
            <h3 className="font-medium text-gray-500">Pending</h3>
            <p className="text-2xl font-bold text-yellow-600">{pendingTodos}</p>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Your Tasks</h2>
          
          {todos.length === 0 ? (
            <p className="text-gray-600">No tasks yet. Add one above!</p>
          ) : (
            <ul className="space-y-3">
              {todos.map(todo => (
                <li 
                  key={todo.id}
                  className={`p-4 border rounded-lg flex items-center justify-between ${
                    todo.completed 
                      ? 'border-green-200 bg-green-50' 
                      : 'border-gray-200'
                  }`}
                >
                  <div className="flex items-center space-x-3 flex-grow">
                    <input
                      type="checkbox"
                      checked={todo.completed}
                      onChange={() => toggleComplete(todo.id)}
                      className="h-5 w-5 rounded border-gray-300 text-purple-700 focus:ring-purple-500"
                    />
                    <span className={`${todo.completed ? 'line-through text-gray-500' : ''}`}>
                      {todo.text}
                    </span>
                  </div>
                  <button
                    onClick={() => deleteTodo(todo.id)}
                    className="text-red-500 hover:text-red-600"
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
