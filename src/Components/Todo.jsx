import React, { useState } from 'react'
import ShowTodo from './ShowTodo'
import './Todo.css'
// import FlipMove from "react-flip-move";
function Todo() {

    const [task, setTask] = useState("")
    const [data, setData] = useState((JSON.parse(localStorage.getItem("data")) || [])); //LocalStorage
    const [dark, setDark] = React.useState(localStorage.getItem('dark-mode') === 'true'); //DarkMode
    const [strike, isStrike] = useState(false);

    // DarkMode
    React.useEffect(() => {
        localStorage.setItem('dark-mode', dark);
      }, [dark]);

    const toggleDarkMode = () => {
        setDark(!dark);
      };            

    // ChangeHandler
    const onChangeHandler = (e) => {
        setTask(e.target.value)
    }

    // SubmitHandler
    const submitHandler = (e) => {
        e.preventDefault();
        console.log("task",task.length)
        // RegEx
        const Validation = /^[^-\s][a-zA-Z0-9_\s-]*$/;
        if(Validation.test(task)){
            setData([task,...data])
            setTask('')
            // LocalStorage
            localStorage.setItem("data",JSON.stringify([task,...data]))
            }
    }

    // DeleteItem
    const deleteItem =(a)=>{
        console.log("Deleted")
        console.log("Data",data)
        const finalData = data.filter((curEle,index)=>{
            return index !== a;
        })
        setData(finalData);
        localStorage.setItem("data",JSON.stringify(finalData));
    };

    // MarkItem

    //   Exp
    const done = (a) => {
        console.log('Strike')
        const ss = data((b,index)=>{
            return index === a;
        })
        setData(ss)
        isStrike(!strike)
    }
     const s = {
        textDecoration: strike ? "line-through" : "none",
    };

    return (
        <div className={`app-wrapper ${dark ? 'dark' : ''}`}>
            <div className="container">
                <header>
                    <h1>Varun's Todo</h1>
                </header>
                <div className="row justify-content-center align-items-center main-row">
                    <div className="col shadow main-col bg-white">
                        <div className="row bg-primary text-white">
                            <div className="col  p-2">
                                <h4 className='text-center'>Todo</h4>
                            </div>
                        </div>
                        <form onSubmit={submitHandler}>
                            <div className="row justify-content-between text-white p-2">
                                <div className="form-group flex-fill mb-2 col-9">
                                    <input id="todo-input" type="text" className="form-control border-dark" value={task} onChange={onChangeHandler} placeholder="Add Task" />
                                </div>
                                <button type="submit" className="btn btn-primary mb-2 ml-2 col-3">Add todo</button>
                                {/* <button  className="btn btn-primary mb-2 ml-2 col-3" onClick={handleClick}>ok</button> */}
                                <button className="dark-mode-toggle" onClick={toggleDarkMode}>Dark</button>
                            </div>
                        </form>

                        {data.map((value, index) => {
                            return <ShowTodo
                                key={index}
                                id={index}
                                task={value}
                                onSelcet={deleteItem}
                                s={s}
                                done={done}
                            />
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
};
export default Todo;


// junk 
//  <FlipMove duration={250} easing="ease-out"> 
//   <input id="todo-input" type="text" className="form-control border-dark" value={task} onChange={onChangeHandler} placeholder="Add Task" /> 
//  </FlipMove>
    // const handleToggle = ({todo}) => {
    //     return (
    //         <div className={todo.complete ? "strike" : ""}>
    //             {todo.task}
    //         </div>
    //     );
    //  };
    //  const handleToggle = (id) => {
    //     let mapped = data.map(task => {
    //       return task.id === id ? { ...task, complete: !task.complete } : { ...task};
    //     });
    //     setData(mapped);
    //   }
    // MarkItem
    // const markTodo = index => {
    //     const newTodos = [...data,];
    //     console.log("Check")
    //     newTodos[index].isDone = true;
    //     setData(newTodos);
    //   };
    // const crossLine = event => {
    //     const element = event.target;
    //     element.classList.toggle("crossed-line");
    // };
    // const completeHandler = () => {
    //     console.log("Complete")
    //     setData(data.map(value => {
    //         if(data.id === task.id){
    //             return {
    //                 ...task, completed: !task.completed
    //             }
    //         }
    //         return data;
    //     }));
    // };
    // const handleClick = event => {
    //     console.log('Checked item')
    //     if (event.target.style.textDecoration) {
    //       event.target.style.removeProperty('text-decoration');
    //     } else {
    //       event.target.style.setProperty('text-decoration', 'line-through');
    //     }
    //   };