import React from 'react'
import { TodoInterface } from '../interfaces/globalInterfaces';

interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    todos?: TodoInterface[];
    setTodos: React.Dispatch<React.SetStateAction<TodoInterface[]>>
}

const InputForm: React.FC<Props> = ({todo, setTodo, setTodos}) => {

    let submit = (e: React.FormEvent) => {
        e.preventDefault();

        // Creating todo
        let newTodo: TodoInterface = {
            id: Date.now(),
            todo,
            isDone: false
        }

        setTodos(state => [...state, newTodo])

        setTodo("");
    }

    return (
        <form onSubmit={submit}>
            <input
                type="string" 
                value={todo} 
                onChange={e => setTodo(e.target.value)} 
            />
            <button>Add</button>
        </form>
    )
}

export default InputForm
