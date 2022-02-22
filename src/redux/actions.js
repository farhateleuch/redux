




export const AddnewTask=(task)=>{
    return {type:"ADD_NEW_TASK",payload:task}

}

export const doneTask=(id)=>{
    return {type:"TASK_DONE",payload:id}
}