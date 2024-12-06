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
        {tasks.map( (task) => (
            <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle}/>
        ))}
    </>
  )
}

export default Tasks