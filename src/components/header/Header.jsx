
import { Link } from 'react-router-dom';
import AddWork from '../addWork/AddWork';
import Register from '../register/Register';
import User from '../user/User';

const Header = () =>{
    return(
<nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
        <a href="" className="navbar-brand">Time App</a>
        <Link to="/" className='navBar-container-recipe--link nav-link'>Home</Link>
        <Link to="/AddWork" className='navBar-container-recipe--link nav-link'>Pridėti</Link>
        
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">

            <User/>

        </div>
        
        
    </div>

  
</nav>

    )
}

export default Header