import './App.css'
import { useState } from 'react';

function TodoItem({ text, onDelete }: { text: string; onDelete: () => void }) {
  return (
    <div className='todoItem'>
      <span>{text}</span>
      <button onClick={onDelete}>✖️</button>
    </div>
  )
}

function MyInput({ input, setInput }: { input: string; setInput: (val: string) => void }) {
  return (
    <input 
      type="text"
      value={input}
      onChange={(e) => setInput(e.target.value)}
      className='funcBarInput'
    />
  )
}

function MyButton({ onClick }: { onClick: () => void }) {
  return (
    <button className='funcBarButton' onClick={onClick}>
      Add
    </button>
  );
}

export default function MyApp() {

  const [input, setInput] = useState('');

  const [todos, setTodos] = useState<string[]>([]);

  const handleAdd = () => {
    setTodos([...todos, input]);
    setInput('');
  }

  return (
    <div className="centered">

      <div className='funcBar'>
        <h1>TODO: </h1>
        <MyInput input={input} setInput={setInput} />
        <MyButton onClick={handleAdd}/>
      </div>

      <div className="todosList">
        {todos.map((todo, index) => (
          <TodoItem
            key={index}
            text={todo}
            onDelete={() => {
              const newTodos = [...todos];
              newTodos.splice(index, 1);
              setTodos(newTodos);
            }}
          />
        ))}
      </div>

    </div>
  )
}