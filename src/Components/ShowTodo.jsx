import React from 'react'
// import Todo from './Todo';

function ShowTodo(props) {
    return (
        <div className='container'>
            <div className="row my-2 shadow-lg" style={{border:"1px solid gray", borderRadius: "10px"}}>
                <div className="col-6 mt-3"  >
                    <h6 style={props.s}>{props.task}</h6>
                </div>
                <div className="col-6">
                    <button 
                    className="btn btn-primary mb-2 mt-2 ml-2 col-3 "
                    onClick={()=>{props.onSelcet(props.id)}}>X</button>
                    <button 
                    className="btn btn-success m-2 mb-2 mt-2 ml-2 col-7"
                    onClick={props.done}>
                    Completed</button>
                </div>
            </div>
        </div>
    )
}
export default ShowTodo;

// onClick={()=>{props.onClk()}}