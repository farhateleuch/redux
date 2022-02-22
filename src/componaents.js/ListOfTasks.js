import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { doneTask } from '../redux/actions';


function ListOfTasks() {

 const dispatch=useDispatch()

 const {tasks}=useSelector(state=>state)
 
  return <div> 
            <h1>tasks done</h1>
            <p>
            {tasks.filter(el=>el.done).map(el=><div> <p style={{textDecoration:"line-through"}}>{el.text}  <button  onClick={()=>dispatch(doneTask(el.id))}>not done yet</button> </p></div>)}

            </p>
            <h1>tasks not done yet</h1>
            <p>
                {tasks.filter(el=>!el.done).map(el=><div> <p>{el.text}</p>  <button onClick={()=>dispatch(doneTask(el.id))}> done</button> </div>)}
            </p>
         </div>;
}

export default ListOfTasks;
