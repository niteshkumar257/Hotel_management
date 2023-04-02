import { Link } from "react-router-dom";

const navbar = () => {
    return (
        <div className="navbar">
            <span className="head">Doshona Hotel</span>
            <nav>
                <ul>
                    {/* <li><Link to="/booking">Home</Link></li> */}
                    <li><Link to='/' ><button>Home</button></Link></li>
                    <li><Link to="#"><button>About</button></Link></li>
                    <li><Link to="#"><button>Contact</button></Link></li>
                    <li><Link to="/login"><button>Sign In</button></Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default navbar;