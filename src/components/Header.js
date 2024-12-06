import Button from './Button.js'

// const Header = (props) => {
//     return(
//         <header>
//             <h1>{props.title}</h1>
//         </header>
//     )
// }

const Header = ({title, onAdd, showAdd}) => {
    return(
        <header className='header'>
            <h1>{title}</h1>
            <Button color={showAdd ? 'red': 'green'} text={showAdd ? 'Close': 'Add'} onAdd={onAdd}/>
        </header>
    )
}


Header.defaultProps = {
    title: 'Task Tracker',
}

export default Header