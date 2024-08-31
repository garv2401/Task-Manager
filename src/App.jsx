import { useState,useEffect } from 'react'
import './App.css'
import {v4 as uuidv4} from 'uuid';
uuidv4();
import Navbar from './components/Navbar'
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FaTasks } from "react-icons/fa";
import { MdDeleteSweep } from "react-icons/md";

function App() {

  const [todo, settodo] = useState("");
  const [todos, settodos] = useState([]);
  const [showFin, setshowFin] = useState(true);


  useEffect(() => {
    let todoString=localStorage.getItem("todos");
    if(todoString){
      let todos=JSON.parse(localStorage.getItem("todos"));
    settodos(todos);

    } 
  },[])
  


  const saveToLS=(params)=>{
    localStorage.setItem("todos",JSON.stringify(todos));
  }

  const handleDelete=(e,id)=>{
    //console.log(e.target,id);
    let newTodos=todos.filter(item=>{
      return item.id!==id;
    });
    
    settodos(newTodos);
    saveToLS();

  }

  const handleEdit=(e,id)=>{
    let index=todos.find(item=>{
      return item.id===id;
    })
    console.log(index.todo,todos);
    settodo(index.todo);
    
    let newTodos=todos.filter(item=>{
      return item.id!==id
    })
    settodos(newTodos);
    saveToLS();
    
  }

  const handleAdd=()=>{
    settodos([...todos,{id:uuidv4(),todo,isCompleted:false}]);
    settodo("");
    saveToLS();
  }

  const handleChange=(e)=>{
    settodo(e.target.value);
  
  }

  const handleCheckbox=(e)=>{
    let id=e.target.name;
    let index=todos.findIndex(item=>{
      return item.id===id;
    })
    let newTodos=[...todos];
    newTodos[index].isCompleted=!newTodos[index].isCompleted;
    settodos(newTodos);
  }

  const toggleFin=()=>{
    setshowFin(!showFin);
  }

  const handleDeleteAll=()=>{
    settodos([]);
  
  }
  
  return (
    <>
      <Navbar />
      <div className="md:contianer mx-auto my-5 rounded-xl p-3 bg-violet-100 min-h-[80vh] md:w-1/2">
        <h1 className="font-bold text-center text-xl">
          iTask-Manage your tasks at one place
        </h1>
        {/* <h2 className='lg text-lg font-bold my-4'>Add a todo</h2> */}
        <div className="addtodo my-5 flex flex-row gap-4">
          <input
            value={todo}
            onChange={handleChange}
            className="w-full rounded-lg py-1 px-2 font-serif"
            type="text"
            placeholder="Add your task..."
          />
          <button
            onClick={handleAdd}
            disabled={todo.length <= 3}
            className="bg-violet-400 hover:bg-violet-500 px-2 py-1 rounded-md text-white font-bold"
          >
            Save
          </button>
        </div>
        <div className="flex gap-3 justify-left ">
          <input
            type="checkbox"
            className="my-3"
            onChange={toggleFin}
            checked={showFin}
          />{" "}
          <div className="font-serif my-3 ">Show Finished</div>
        </div>
        <div className="yourTasks flex justify-between">
          <div className="flex gap-2 justify-start">
            <div className="my-2 mx-1">
              <FaTasks />
            </div>
            <h2 className="text-xl font-bold font-sans">Your tasks </h2>
          </div>

          <div className='flex justify-end'>
            <button onClick={handleDeleteAll} className="my-1 bg-violet-400 hover:bg-violet-500 px-2 py-1 rounded-md text-white mx-2 font-bold">
            <MdDeleteSweep size={20}/>
            </button>
          </div>
        </div>
        <div className="todos bg-white p-3 rounded-lg">
          {todos.length == 0 && (
            <div className="text-slate-400 font-serif">No todos to show..</div>
          )}
          {todos.map((item) => {
            return (
              (showFin || !item.isCompleted) && (
                <div
                  key={item.id}
                  className="todo flex justify-between my-3 md:w-full"
                >
                  <div className="flex gap-5">
                    <input
                      className=""
                      name={item.id}
                      onChange={handleCheckbox}
                      type="checkbox"
                      checked={item.isCompleted}
                    />
                    <div
                      className={
                        item.isCompleted
                          ? "line-through font-serif"
                          : "font-serif"
                      }
                    >
                      {item.todo}
                    </div>
                  </div>
                  <div className="buttons flex h-full">
                    <button
                      onClick={(e) => {
                        handleEdit(e, item.id);
                      }}
                      className="bg-violet-400 hover:bg-violet-500 px-2 py-1 rounded-md text-white mx-2 font-bold"
                    >
                      <FaEdit />
                    </button>
                    <button
                      onClick={(e) => {
                        handleDelete(e, item.id);
                      }}
                      className="bg-violet-400 hover:bg-violet-500 px-2 py-1 rounded-md text-white mx-2 font-bold"
                    >
                      <MdDelete />
                    </button>
                  </div>
                </div>
              )
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App
