import './Navigation.css';

const Navigation = () => {  

    return <nav>
        <img src="https://farmkartgroup.com/wp-content/uploads/2020/07/Farmkart-Logo.svg" alt="no" />
        <div className="navlinks">
            <ul>
                <li className="links">Home</li>
                <li className="links">Products</li>
                <li className="links">Contact</li>
                <li className="links">About</li>
            </ul>
        </div>
        <div className="buttons">
            <button className='Login'>Log in</button>
            <button className='Signup'>Sign Up</button>
        </div>

    </nav>
}

export default Navigation;
