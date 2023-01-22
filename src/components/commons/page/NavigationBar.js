import { FaMoneyBillAlt } from 'react-icons/fa';
import { FiLogOut,FiLogIn } from 'react-icons/fi';
import { IoMdCreate } from 'react-icons/io';
import { Link } from 'react-router-dom';
function NavigationBar() {
    const getUsername = sessionStorage.getItem('username')
    return (
        <div className="w-100">
            <nav className="d-flex justify-content-between p-3 navbar navbar-expand-lg navbar-light bg-primary text-light">
                <div>
                <FaMoneyBillAlt size={40} />
                <a className="m-3 navbar-brand text-light">
                    Atm Machine
                </a>
                </div>
                
                {
                    getUsername ? 
                    <Link to="/logout">
                    
                    <a className="ml-auto text-light">
                        <FiLogOut/>
                        Logout
                    </a>
                    </Link> : 
                    <div className="ml-auto text-light">
                    <Link to="/signup"className='text-light'>
                        <IoMdCreate/>
                    Sign up
                    </Link >
                    <Link to="/signin" className='m-3 text-light'>
                        <FiLogIn/>
                    Sign In
                    </Link>
                    </div>
                }


            </nav>
        </div>
    );
}

export default NavigationBar;