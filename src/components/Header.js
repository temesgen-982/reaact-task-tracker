import Button from './Button.js'
import {useLocation} from 'react-router-dom'
// const Header = (props) => {
//     return(
//         <header>
//             <h1>{props.title}</h1>
//         </header>
//     )
// }

const Header = ({title, onAdd, showAdd}) => {
    const location = useLocation();
    return(
        <header className='header'>
            <h1>{title}</h1>
            {location.pathname === '/' && (<Button color={showAdd ? 'red': 'green'} text={showAdd ? 'Close': 'Add'} onAdd={onAdd}/>)}
        </header>
    )
}

export default Header