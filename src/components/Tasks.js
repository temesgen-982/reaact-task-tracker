import Task from './Task'
// const tasks = [
//     {
//         id: 1,
//         text: 'Do things',
//         day: 'Feb 1',
//         reminder: true,
//     },
//     {
//         id: 1,
//         text: 'Do things',
//         day: 'Feb 1',
//         reminder: true,
//     },
//     {
//         id: 1,
//         text: 'Do things',
//         day: 'Feb 1',
//         reminder: true,
//     }
// ]


const Tasks = ({tasks, onDelete, onToggle}) => {
    return (
    <>
        {tasks.map( (task, index) => (
            <Task key={index} task={task} onDelete={onDelete} onToggle={onToggle}/>
        ))}
    </>
  )
}

export default Tasks