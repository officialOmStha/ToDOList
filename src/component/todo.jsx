import { useState } from "react"

export const ToDo = () => {
    const [task, setTask] = useState(["Exercise"]);
    const [newTask, setNewTask] = useState("");

    function handelInputChange(event){
        setNewTask(event.target.value)
    }

    function addTask(){
        if(newTask.trim() !== ""){
        setTask([...task, newTask])
        setNewTask("")
        }
    }

    function deleteTask(index){
        const updatedTask = task.filter((_, i) => i !== index);
        setTask(updatedTask)
    }

    function moveTaskUp(index) {
    if (index > 0) {
        const updatedTask = [...task];
        [updatedTask[index], updatedTask[index - 1]] = [updatedTask[index - 1], updatedTask[index]];
        setTask(updatedTask);
    }
}

    function moveTaskDown(index){
    if(index < task.length - 1){
        const updatedTask = [...task];
        [updatedTask[index], updatedTask[index + 1]] = [updatedTask[index + 1], updatedTask[index]];
        setTask(updatedTask);
    }
}



    return(
        <div className="flex flex-col bg-blue-300 min-h-[100vh] items-center md:p-20 p-4">
            <h1 className="text-4xl font-bold">To Do List</h1>
            <div className="flex gap-4 m-5">
                <input
                className="border-2 rounded-3xl p-4 bg-gray-200" 
                type="text" 
                placeholder="Enter a task"
                value = {newTask}
                onChange={handelInputChange}
                />
                <button 
                className="border-2 py-2 px-6 rounded-4xl bg-green-700 hover:bg-green-400"
                onClick={addTask}
                >
                Add</button>
            </div>

            <ol className="list-decimal list-inside">
                {task.map((item, index) => 
                <li className="bg-gray-200 p-4 my-2 "
                key={index}> <span className="mr-[20px] md:mr-[300px]">{item}</span>
                <button 
                className="border-1 ml-2 py-2 px-4 bg-red-700 hover:bg-red-400 rounded-3xl"
                onClick={() => deleteTask(index)}
                >
                    Delete
                </button>
                <button 
                className="border-1 ml-2 py-2 px-4 bg-cyan-700 hover:bg-cyan-400 rounded-3xl"
                onClick={() => moveTaskUp(index)}
                >
                    Up
                </button>
                <button 
                className="border-1 ml-2 py-2 px-4 bg-yellow-700 hover:bg-yellow-400 rounded-3xl"
                onClick={() => moveTaskDown(index)}
                >
                    Down
                </button>
                </li>
                )}
            </ol>
        </div>
    )
}